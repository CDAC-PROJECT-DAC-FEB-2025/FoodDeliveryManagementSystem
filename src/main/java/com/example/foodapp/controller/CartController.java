package com.example.foodapp.controller;

import com.example.foodapp.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestParam Long userId, @RequestParam Long itemId) {
        try {
            cartService.addToCart(userId, itemId);
            return ResponseEntity.ok().body("{\"success\":true,\"message\":\"Added To Cart\"}");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"success\":false,\"message\":\"Error\"}");
        }
    }

    @PostMapping("/remove")
    public ResponseEntity<?> removeFromCart(@RequestParam Long userId, @RequestParam Long itemId) {
        try {
            cartService.removeFromCart(userId, itemId);
            return ResponseEntity.ok().body("{\"success\":true,\"message\":\"Removed From Cart\"}");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"success\":false,\"message\":\"Error\"}");
        }
    }

    @PostMapping("/get")
    public ResponseEntity<?> getCart(@RequestParam Long userId) {
        try {
            return ResponseEntity.ok().body(cartService.getCart(userId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"success\":false,\"message\":\"Error\"}");
        }
    }
}
