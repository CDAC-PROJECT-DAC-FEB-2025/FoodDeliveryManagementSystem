package com.example.foodapp.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.HashMap;
import java.util.Map;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "user_cart", joinColumns = @JoinColumn(name = "user_id"))
    @MapKeyColumn(name = "item_id")
    @Column(name = "quantity")
    private Map<Long, Integer> cartData = new HashMap<>();
}
