package com.openclassrooms.mddapi.repository;

import com.openclassrooms.mddapi.entities.Article;
import com.openclassrooms.mddapi.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findByThemeId(Long themeId);
    List<Article> findByAuthorId(Long authorId);

    List<Article> findByAuthor(User author);

}
