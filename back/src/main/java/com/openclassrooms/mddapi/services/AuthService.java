package com.openclassrooms.mddapi.services;


import com.openclassrooms.mddapi.Dtos.UserDTO;
import com.openclassrooms.mddapi.entities.User;
import com.openclassrooms.mddapi.jwt.JwtUtil;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;

/**
 * Service gérant la logique d'authentification, y compris la connexion et la génération de jetons.
 */
@Service
public class AuthService {


    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;



    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    /**
     * Authentifie un utilisateur et génère un jeton JWT s'il est réussi.
     *
     * @param userDTO les informations de connexion de l'utilisateur.
     * @return une carte contenant le jeton JWT ou un message d'erreur.
     */
    public HashMap loginUser(UserDTO userDTO) {

        HashMap<String, String> response = new HashMap<>();

        Optional<User> myUser =  userRepository.findByEmail(userDTO.getEmail());

        // si l'utilisateur existe et que le mot de passe correspond
        if(myUser.isPresent() && bCryptPasswordEncoder.matches(userDTO.getPassword(), myUser.get().getPassword())) {
            String token = jwtUtil.generateToken(myUser.get());
            response.put("token", token);

            System.out.println("Login successful for email: " + userDTO.getEmail());
        } else {
            response.put("error", "Identifiants invalides");
            System.out.println("Login failed for email: " + userDTO.getEmail());
        }
        return response;
    }

}
