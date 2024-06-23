package com.openclassrooms.mddapi.controllers;


import com.openclassrooms.mddapi.Dtos.UserDTO;
import com.openclassrooms.mddapi.entities.User;
import com.openclassrooms.mddapi.jwt.JwtUtil;
import com.openclassrooms.mddapi.repository.UserRepository;
import com.openclassrooms.mddapi.services.AuthService;
import com.openclassrooms.mddapi.services.RegisterService;
import com.openclassrooms.mddapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api/")
public class AuthController {

    @Autowired
    private RegisterService registerService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("auth/register")
    public ResponseEntity<User> register(@RequestBody UserDTO userDTO) {
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());

        User registeredUser = registerService.register(user);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("auth/login")
    public HashMap loginUser(@RequestBody UserDTO userDTO) {

        return authService.loginUser(userDTO);
    }

    @GetMapping("auth/me")
    public UserDTO getMe() {

        return userService.getMe();
    }

}