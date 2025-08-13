package com.example.foodapp.model;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class Address {
    private String street;
    private String city;
    private String postalCode;
    private String state;
    private String country;
}