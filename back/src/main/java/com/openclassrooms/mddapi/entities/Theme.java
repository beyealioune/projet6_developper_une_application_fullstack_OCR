package com.openclassrooms.mddapi.entities;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Theme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "theme")
    private List<Article> articles;

    // Getters and setters
}
