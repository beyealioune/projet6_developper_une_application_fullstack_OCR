package com.openclassrooms.mddapi.Dtos;

import com.openclassrooms.mddapi.entities.Article;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@Builder
public class ArticleDTO {
    private Long id;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private UserDTO author;
    private ThemeDTO theme;
    private List<CommentDTO> comments;

    public static ArticleDTO fromModel(Article article) {
        return ArticleDTO.builder()
                .id(article.getId())
                .title(article.getTitle())
                .content(article.getContent())
                .createdAt(article.getCreatedAt())
                .author(UserDTO.fromModel(article.getAuthor()))
                .theme(ThemeDTO.fromModel(article.getTheme()))
                .comments(article.getComments().stream().map(CommentDTO::fromModel).collect(Collectors.toList()))
                .build();
    }

    public Article toModel() {
        Article article = new Article();
        article.setId(this.id);
        article.setTitle(this.title);
        article.setContent(this.content);
        article.setCreatedAt(this.createdAt);
        article.setAuthor(this.author.toModel());
        article.setTheme(this.theme.toModel());
        article.setComments(this.comments.stream().map(CommentDTO::toModel).collect(Collectors.toList()));
        return article;
    }

}