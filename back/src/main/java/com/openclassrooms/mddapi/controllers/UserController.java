package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.Dtos.UserDTO;
import com.openclassrooms.mddapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{userId}")
    public UserDTO getUserProfile(@PathVariable Long userId) {
        return userService.getUserProfile(userId);
    }

    @GetMapping("/username/{username}")
    public UserDTO getUserProfileByUsername(@PathVariable String username) {
        return userService.getUserProfileByUsername(username);
    }
}
