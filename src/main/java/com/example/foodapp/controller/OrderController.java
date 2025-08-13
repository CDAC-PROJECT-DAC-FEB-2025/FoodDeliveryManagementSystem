package com.example.foodapp.controller;

import com.example.foodapp.dto.PlaceOrderRequest;
import com.example.foodapp.dto.UpdateStatusRequest;
import com.example.foodapp.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/place")
    public ResponseEntity<?> placeOrder(@RequestBody PlaceOrderRequest request) {
        try {
            String url = orderService.placeOnlineOrder(request);
            return ResponseEntity.ok().body("{\"success\":true,\"session_url\":\"" + url + "\"}");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"success\":false,\"message\":\"Error\"}");
        }
    }

    @PostMapping("/placecod")
    public ResponseEntity<?> placeCod(@RequestBody PlaceOrderRequest request) {
        String msg = orderService.placeCodOrder(request);
        return ResponseEntity.ok().body("{\"success\":true,\"message\":\"" + msg + "\"}");
    }

    @GetMapping("/list")
    public ResponseEntity<?> listOrders() {
        return ResponseEntity.ok().body(orderService.listAll());
    }

    @PostMapping("/userorders")
    public ResponseEntity<?> userOrders(@RequestParam Long userId) {
        return ResponseEntity.ok().body(orderService.listByUser(userId));
    }

    @PostMapping("/status")
    public ResponseEntity<?> updateStatus(@RequestBody UpdateStatusRequest request) {
        orderService.updateStatus(request);
        return ResponseEntity.ok().body("{\"success\":true,\"message\":\"Status Updated\"}");
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verify(@RequestParam Long orderId, @RequestParam String success) {
        String message = orderService.verifyOrder(orderId, success);
        return ResponseEntity.ok().body("{\"success\":true,\"message\":\"" + message + "\"}");
    }
}
