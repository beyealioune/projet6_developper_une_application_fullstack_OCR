package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.Dtos.ArticleDTO;
import com.openclassrooms.mddapi.Dtos.SubscriptionDTO;
import com.openclassrooms.mddapi.services.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {
    @Autowired
    private SubscriptionService subscriptionService;

    @PostMapping("/article")
    public SubscriptionDTO subscribeToArticle(@RequestParam Long userId, @RequestParam Long articleId) {
        return subscriptionService.subscribeToArticle(userId, articleId);
    }

    @GetMapping("/user/{userId}")
    public List<ArticleDTO> getSubscribedArticles(@PathVariable Long userId) {
        return subscriptionService.getSubscribedArticles(userId);
    }


    @DeleteMapping("/article/{articleId}/user/{userId}")
    public void unsubscribeFromArticle(@PathVariable Long userId, @PathVariable Long articleId) {
        subscriptionService.unsubscribeFromArticle(userId, articleId);
    }

}
