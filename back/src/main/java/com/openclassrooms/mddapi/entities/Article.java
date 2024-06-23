package com.openclassrooms.mddapi.entities;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Lob
    private String content;
    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;

    @ManyToOne
    @JoinColumn(name = "theme_id")
    private Theme theme;

    @OneToMany(mappedBy = "article")
    private List<Comment> comments;

    @OneToMany(mappedBy = "article")
    private List<Subscription> subscriptions;

    // Getters and setters
}
