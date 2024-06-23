package com.openclassrooms.mddapi.Dtos;

import com.openclassrooms.mddapi.entities.Subscription;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class SubscriptionDTO {
    private Long id;
    private UserDTO user;
    private ArticleDTO article;

    public static SubscriptionDTO fromModel(Subscription subscription) {
        return SubscriptionDTO.builder()
                .id(subscription.getId())
                .user(UserDTO.fromModel(subscription.getUser()))
                .article(ArticleDTO.fromModel(subscription.getArticle()))
                .build();
    }

    public Subscription toModel() {
        Subscription subscription = new Subscription();
        subscription.setId(this.id);
        subscription.setUser(this.user.toModel());
        subscription.setArticle(this.article.toModel());
        return subscription;
    }

}
