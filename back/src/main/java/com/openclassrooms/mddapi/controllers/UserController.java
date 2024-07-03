package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.Dtos.UserDTO;
import com.openclassrooms.mddapi.entities.User;
import com.openclassrooms.mddapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/auth/me")
    public ResponseEntity<UserDTO> updateUserProfile(@RequestBody UserDTO userDTO) {
        String currentEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        Optional<User> currentUser = userService.findByEmail(currentEmail);

        if (currentUser.isPresent()) {
            UserDTO updatedUser = userService.updateUserProfile(currentUser.get().getId(), userDTO.getUsername(), userDTO.getEmail());
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
