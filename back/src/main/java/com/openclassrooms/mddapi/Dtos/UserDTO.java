package com.openclassrooms.mddapi.Dtos;

import com.openclassrooms.mddapi.entities.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class UserDTO {
    private Long id;
    private String username;
    private String email;
    private String password;
    private String bio;

    public static UserDTO fromModel(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .password(user.getPassword())
                .bio(user.getBio())
                .build();
    }

    public User toModel() {
        User user = new User();
        user.setId(this.id);
        user.setUsername(this.username);
        user.setEmail(this.email);
        user.setPassword(this.password);
        user.setBio(this.bio);
        return user;
    }

}
