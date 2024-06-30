package com.openclassrooms.mddapi.Dtos;

import com.openclassrooms.mddapi.entities.Theme;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@Builder
public class ThemeDTO {
    private Long id;
    private String name;
    private List<ArticleDTO> articles;

    public static ThemeDTO fromModel(Theme theme) {
        ThemeDTO.ThemeDTOBuilder builder = ThemeDTO.builder()
                .id(theme.getId())
                .name(theme.getName());

        List<ArticleDTO> articleDTOs = new ArrayList<>();
        theme.getArticles().forEach(article -> {
            ArticleDTO articleDTO = ArticleDTO.builder()
                    .id(article.getId())
                    .title(article.getTitle())
                    .content(article.getContent())
                    // Ne pas ajouter le thème pour éviter la récursivité
                    .build();
            articleDTOs.add(articleDTO);
        });

        builder.articles(articleDTOs);

        return builder.build();
    }

    public static ThemeDTO fromName(String name) {
        return ThemeDTO.builder()
                .name(name)
                .build();
    }

    public Theme toModel() {
        Theme theme = new Theme();
        theme.setId(this.id);
        theme.setName(this.name);

        if (this.articles != null) {
            theme.setArticles(this.articles.stream().map(ArticleDTO::toPartialModel).collect(Collectors.toList()));
        } else {
            theme.setArticles(Collections.emptyList()); // Ou null, selon votre logique métier
        }

        return theme;
    }
}
