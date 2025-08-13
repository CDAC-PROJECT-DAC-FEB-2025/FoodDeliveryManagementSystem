package com.example.foodapp.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    @ElementCollection
    private List<OrderItem> items;

    private double amount;

    @Embedded
    private Address address;

    private String status = "Food Processing";

    private LocalDateTime date = LocalDateTime.now();

    private boolean payment = false;
}
