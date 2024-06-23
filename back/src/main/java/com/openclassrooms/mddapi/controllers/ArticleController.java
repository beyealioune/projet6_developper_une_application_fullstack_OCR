package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.Dtos.ArticleDTO;
import com.openclassrooms.mddapi.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/article")
public class ArticleController {
    @Autowired
    private ArticleService articleService;

    @PostMapping("/create")
    public ArticleDTO createArticle(@RequestBody ArticleDTO articleDTO) {
        return articleService.createArticle(articleDTO);
    }

    @GetMapping("/allArticles")
    public List<ArticleDTO> getAllArticles() {
        return articleService.getAllArticles();
    }

    @GetMapping("/theme/{themeId}")
    public List<ArticleDTO> getArticlesByTheme(@PathVariable Long themeId) {
        return articleService.getArticlesByTheme(themeId);
    }

    @GetMapping("/subscriptions/{userId}")
    public List<ArticleDTO> getSubscribedArticles(@PathVariable Long userId) {
        return articleService.getSubscribedArticles(userId);
    }

    @GetMapping("/{articleId}")
    public ArticleDTO getArticleById(@PathVariable Long articleId) {
        return articleService.getArticleById(articleId);
    }
}
