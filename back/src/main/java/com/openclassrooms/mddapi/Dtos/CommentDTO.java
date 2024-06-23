package com.openclassrooms.mddapi.Dtos;

import com.openclassrooms.mddapi.entities.Comment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
public class CommentDTO {
    private Long id;
    private String content;
    private LocalDateTime createdAt;
    private UserDTO author;
    private ArticleDTO article;

    public static CommentDTO fromModel(Comment comment) {
        return CommentDTO.builder()
                .id(comment.getId())
                .content(comment.getContent())
                .createdAt(comment.getCreatedAt())
                .author(UserDTO.fromModel(comment.getAuthor()))
                .article(ArticleDTO.fromModel(comment.getArticle()))
                .build();
    }

    public Comment toModel() {
        Comment comment = new Comment();
        comment.setId(this.id);
        comment.setContent(this.content);
        comment.setCreatedAt(this.createdAt);
        comment.setAuthor(this.author.toModel());
        comment.setArticle(this.article.toModel());
        return comment;
    }

}
