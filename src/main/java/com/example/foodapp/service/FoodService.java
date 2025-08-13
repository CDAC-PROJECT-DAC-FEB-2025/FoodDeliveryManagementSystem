package com.example.foodapp.service;

import com.example.foodapp.model.Food;
import com.example.foodapp.repository.FoodRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FoodService {

    private final FoodRepository foodRepository;

    public List<Food> listFoods() {
        return foodRepository.findAll();
    }

    public void addFood(Food food) {
        foodRepository.save(food); // Works with byte[] BLOB
    }

    public void removeFood(Long id) {
        foodRepository.deleteById(id);
    }
}
