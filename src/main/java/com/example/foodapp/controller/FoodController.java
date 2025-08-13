package com.example.foodapp.controller;

import com.example.foodapp.model.Food;
import com.example.foodapp.service.FoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/food")
@RequiredArgsConstructor
public class FoodController {

    private final FoodService foodService;

    @GetMapping("/list")
    public ResponseEntity<?> listFoods() {
        return ResponseEntity.ok().body(foodService.listFoods());
    }

    @PostMapping(value = "/add", consumes = "multipart/form-data")
    public ResponseEntity<?> addFood(
            @RequestParam String name,
            @RequestParam String description,
            @RequestParam double price,
            @RequestParam String category,
            @RequestParam MultipartFile image
    ) {
        try {
            // Validate fields
            if (name.trim().isEmpty())
                return ResponseEntity.badRequest().body("{\"success\": false, \"message\": \"Name is required\"}");
            if (description.trim().isEmpty())
                return ResponseEntity.badRequest().body("{\"success\": false, \"message\": \"Description is required\"}");
            if (price <= 0)
                return ResponseEntity.badRequest().body("{\"success\": false, \"message\": \"Price must be greater than 0\"}");
            if (category.trim().isEmpty())
                return ResponseEntity.badRequest().body("{\"success\": false, \"message\": \"Category is required\"}");
            if (image == null || image.isEmpty())
                return ResponseEntity.badRequest().body("{\"success\": false, \"message\": \"Image file is required\"}");

            // Map to entity
            Food food = new Food();
            food.setName(name);
            food.setDescription(description);
            food.setPrice(price);
            food.setCategory(category);
            food.setImage(image.getBytes()); // store raw bytes in DB (BLOB)

            // Save via service
            foodService.addFood(food);

            return ResponseEntity.ok().body("{\"success\": true, \"message\": \"Food Added\"}");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("{\"success\": false, \"message\": \"" + e.getMessage() + "\"}");
        }
    }

    @PostMapping("/remove")
    public ResponseEntity<?> removeFood(@RequestParam Long id) {
        try {
            foodService.removeFood(id);
            return ResponseEntity.ok().body("{\"success\": true, \"message\": \"Food Removed\"}");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("{\"success\": false, \"message\": \"" + e.getMessage() + "\"}");
        }
    }
}
