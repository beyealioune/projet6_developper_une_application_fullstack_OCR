package com.openclassrooms.mddapi.entities;
import lombok.Data;

import javax.persistence.*;
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
