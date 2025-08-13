package com.example.foodapp.service;

import com.example.foodapp.dto.PlaceOrderRequest;
import com.example.foodapp.dto.UpdateStatusRequest;
import com.example.foodapp.model.Order;
import com.example.foodapp.repository.OrderRepository;
import com.example.foodapp.repository.UserRepository;
import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;

    @Value("${stripe.secret.key}")
    private String stripeSecret;

    @Value("${stripe.currency}")
    private String currency;

    @Value("${frontend.url}")
    private String frontendUrl;

    private final int deliveryCharge = 50;

    public String placeOnlineOrder(PlaceOrderRequest request) throws Exception {
        Order order = new Order();
        order.setUserId(request.getUserId());
        order.setItems(request.getItems());
        order.setAmount(request.getAmount());
        order.setAddress(request.getAddress());
        orderRepository.save(order);

        // Clear cart
        userRepository.findById(request.getUserId()).ifPresent(user -> {
            user.getCartData().clear();
            userRepository.save(user);
        });

        Stripe.apiKey = stripeSecret;

        List<SessionCreateParams.LineItem> items = request.getItems().stream().map(item ->
            SessionCreateParams.LineItem.builder()
                .setQuantity((long) item.getQuantity())
                .setPriceData(
                    SessionCreateParams.LineItem.PriceData.builder()
                        .setCurrency(currency)
                        .setUnitAmount((long) (item.getPrice() * 100))
                        .setProductData(
                            SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                .setName(item.getName())
                                .build()
                        )
                        .build()
                ).build()
        ).toList();

        // Add delivery charge
        items.add(SessionCreateParams.LineItem.builder()
            .setQuantity(1L)
            .setPriceData(
                SessionCreateParams.LineItem.PriceData.builder()
                    .setCurrency(currency)
                    .setUnitAmount((long) (deliveryCharge * 100))
                    .setProductData(
                        SessionCreateParams.LineItem.PriceData.ProductData.builder()
                            .setName("Delivery Charge")
                            .build()
                    ).build()
            ).build());

        SessionCreateParams params = SessionCreateParams.builder()
            .addAllLineItem(items)
            .setMode(SessionCreateParams.Mode.PAYMENT)
            .setSuccessUrl(frontendUrl + "/verify?success=true&orderId=" + order.getId())
            .setCancelUrl(frontendUrl + "/verify?success=false&orderId=" + order.getId())
            .build();

        Session session = Session.create(params);
        return session.getUrl();
    }

    public String placeCodOrder(PlaceOrderRequest request) {
        Order order = new Order();
        order.setUserId(request.getUserId());
        order.setItems(request.getItems());
        order.setAmount(request.getAmount());
        order.setAddress(request.getAddress());
        order.setPayment(true);
        orderRepository.save(order);

        // Clear cart
        userRepository.findById(request.getUserId()).ifPresent(user -> {
            user.getCartData().clear();
            userRepository.save(user);
        });

        return "Order Placed (COD)";
    }

    public List<Order> listAll() {
        return orderRepository.findAll();
    }

    public List<Order> listByUser(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public void updateStatus(UpdateStatusRequest request) {
        Order order = orderRepository.findById(request.getOrderId())
                .orElseThrow(() -> new RuntimeException("Order not found"));
        order.setStatus(request.getStatus());
        orderRepository.save(order);
    }

    public String verifyOrder(Long orderId, String success) {
        if (success.equals("true")) {
            Order order = orderRepository.findById(orderId)
                    .orElseThrow(() -> new RuntimeException("Order not found"));
            order.setPayment(true);
            orderRepository.save(order);
            return "Paid";
        } else {
            orderRepository.deleteById(orderId);
            return "Not Paid";
        }
    }
}
