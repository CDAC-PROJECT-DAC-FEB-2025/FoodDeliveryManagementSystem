package com.example.foodapp.dto;

import lombok.Data;

@Data
public class UpdateStatusRequest {
    private Long orderId;
    private String status;
}