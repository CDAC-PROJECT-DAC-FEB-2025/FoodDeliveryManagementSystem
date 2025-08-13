package com.example.foodapp.dto;

import com.example.foodapp.model.Address;
import com.example.foodapp.model.OrderItem;
import lombok.Data;

import java.util.List;

@Data
public class PlaceOrderRequest {
    private Long userId;
    private List<OrderItem> items;
    private double amount;
    private Address address;
}