package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.Dtos.UserDTO;
import com.openclassrooms.mddapi.entities.User;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
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
        // Récupérer l'email de l'utilisateur actuellement authentifié
        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();

        // Recherche de l'utilisateur par email
        Optional<User> user = userRepository.findByEmail(userEmail);
        if (!user.isPresent()) {
            throw new EntityNotFoundException("User not found with email: " + userEmail);
        }

        // Conversion de l'utilisateur en DTO sans inclure le mot de passe
        UserDTO userDTO = UserDTO.fromModel(user.get());
        userDTO.setPassword(null); // Supprimer le mot de passe du DTO

        return userDTO;
    }
}
