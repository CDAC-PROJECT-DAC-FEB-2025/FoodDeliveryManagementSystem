package com.example.foodapp.dto;

import org.springframework.web.multipart.MultipartFile;

public class FoodRequest {
    private String name;
    private String description;
    private double price;
    private String category;
    private MultipartFile image;

    // Getters & setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public MultipartFile getImage() { return image; }
    public void setImage(MultipartFile image) { this.image = image; }
}
