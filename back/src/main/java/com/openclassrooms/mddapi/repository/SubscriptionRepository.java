package com.openclassrooms.mddapi.repository;

import com.openclassrooms.mddapi.entities.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByUserId(Long userId);

    Optional<Subscription> findByUserIdAndArticleId(Long userId, Long articleId);

}
