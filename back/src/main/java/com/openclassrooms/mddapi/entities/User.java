package com.openclassrooms.mddapi.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String email;

    private String password;

    private String bio;


    @OneToMany(mappedBy = "author")
    private List<Article> articles;

    @OneToMany(mappedBy = "author")
    private List<Comment> comments;

    @OneToMany(mappedBy = "user")
    private List<Subscription> subscriptions;

}
