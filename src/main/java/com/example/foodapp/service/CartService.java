package com.example.foodapp.service;

import com.example.foodapp.model.User;
import com.example.foodapp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class CartService {

    private final UserRepository userRepository;

    public void addToCart(Long userId, Long itemId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Map<Long, Integer> cart = user.getCartData();
        cart.put(itemId, cart.getOrDefault(itemId, 0) + 1);
        userRepository.save(user);
    }

    public void removeFromCart(Long userId, Long itemId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Map<Long, Integer> cart = user.getCartData();
        if (cart.containsKey(itemId) && cart.get(itemId) > 0) {
            cart.put(itemId, cart.get(itemId) - 1);
        }
        userRepository.save(user);
    }

    public Map<Long, Integer> getCart(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"))
                .getCartData();
    }
}
