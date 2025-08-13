package com.example.foodapp.service;

import com.example.foodapp.dto.LoginRequest;
import com.example.foodapp.dto.RegisterRequest;
import com.example.foodapp.model.User;
import com.example.foodapp.repository.UserRepository;
import com.example.foodapp.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public String register(RegisterRequest request) {
        Optional<User> exists = userRepository.findByEmail(request.getEmail());
        if (exists.isPresent()) {
            throw new RuntimeException("User already exists");
        }

        if (request.getPassword().length() < 8) {
            throw new RuntimeException("Password too weak");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        userRepository.save(user);

        return jwtUtil.generateToken(user.getId());
    }

    public String login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User does not exist"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        return jwtUtil.generateToken(user.getId());
    }
}
