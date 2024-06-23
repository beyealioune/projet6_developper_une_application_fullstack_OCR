package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.Dtos.CommentDTO;
import com.openclassrooms.mddapi.entities.Comment;
import com.openclassrooms.mddapi.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    public CommentDTO addComment(CommentDTO commentDTO) {
        Comment comment = commentDTO.toModel();
        Comment savedComment = commentRepository.save(comment);
        return CommentDTO.fromModel(savedComment);
    }

    public List<CommentDTO> getCommentsByArticleId(Long articleId) {
        return commentRepository.findByArticleId(articleId).stream().map(CommentDTO::fromModel).collect(Collectors.toList());
    }
}
