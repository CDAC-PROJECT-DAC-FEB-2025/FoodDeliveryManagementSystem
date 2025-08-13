package com.example.foodapp.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private double price;

    @Lob
    @Column(columnDefinition = "BLOB")
    private byte[] image; // store binary image data

    private String category;
}
