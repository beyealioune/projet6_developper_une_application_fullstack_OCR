package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.Dtos.ArticleDTO;
import com.openclassrooms.mddapi.Dtos.SubscriptionDTO;
import com.openclassrooms.mddapi.entities.Subscription;
import com.openclassrooms.mddapi.repository.ArticleRepository;
import com.openclassrooms.mddapi.repository.SubscriptionRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SubscriptionService {
    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ArticleRepository articleRepository;

    public SubscriptionDTO subscribeToArticle(Long userId, Long articleId) {
        Subscription subscription = new Subscription();
        subscription.setUser(userRepository.findById(userId).orElse(null));
        subscription.setArticle(articleRepository.findById(articleId).orElse(null));
        Subscription savedSubscription = subscriptionRepository.save(subscription);
        return SubscriptionDTO.fromModel(savedSubscription);
    }

    public List<ArticleDTO> getSubscribedArticles(Long userId) {
        return subscriptionRepository.findByUserId(userId).stream()
                .map(subscription -> ArticleDTO.fromModel(subscription.getArticle()))
                .collect(Collectors.toList());
    }
}
