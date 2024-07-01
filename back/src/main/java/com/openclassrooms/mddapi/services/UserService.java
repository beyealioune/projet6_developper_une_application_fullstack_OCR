package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.Dtos.UserDTO;
import com.openclassrooms.mddapi.entities.User;
import com.openclassrooms.mddapi.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserDTO getUserProfile(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        return user.map(UserDTO::fromModel).orElse(null);
    }

    public UserDTO getUserProfileByUsername(String username) {
        User user = userRepository.findByUsername(username);
        return user != null ? UserDTO.fromModel(user) : null;
    }

    public UserDTO getMe() {
        try {
            String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
            Optional<User> user = userRepository.findByEmail(userEmail);
            if (!user.isPresent()) {
                throw new EntityNotFoundException("User not found with email: " + userEmail);
            }
            UserDTO userDTO = UserDTO.fromModel(user.get());
            userDTO.setPassword(null); // Supprimer le mot de passe du DTO
            return userDTO;
        } catch (EntityNotFoundException ex) {
            throw ex; // Laisser l'exception EntityNotFoundException être propagée
        } catch (Exception ex) {
            throw new RuntimeException("Failed to fetch user details", ex); // Capturer et lancer une exception plus générale
        }
    }

}
