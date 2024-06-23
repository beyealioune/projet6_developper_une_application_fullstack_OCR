package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.Dtos.UserDTO;
import com.openclassrooms.mddapi.entities.User;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}
