package com.openclassrooms.mddapi.Dtos;

import com.openclassrooms.mddapi.entities.Theme;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

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
        return ThemeDTO.builder()
                .id(theme.getId())
                .name(theme.getName())
                .articles(theme.getArticles().stream().map(ArticleDTO::fromModel).collect(Collectors.toList()))
                .build();
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
            theme.setArticles(this.articles.stream().map(ArticleDTO::toModel).collect(Collectors.toList()));
        } else {
            theme.setArticles(Collections.emptyList()); // Ou null, selon votre logique métier
        }

        return theme;
    }

}


