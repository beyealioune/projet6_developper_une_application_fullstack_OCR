package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.Dtos.ThemeDTO;
import com.openclassrooms.mddapi.entities.Theme;
import com.openclassrooms.mddapi.repository.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ThemeService {
    @Autowired
    private ThemeRepository themeRepository;

    public List<ThemeDTO> getAllThemes() {
        return themeRepository.findAll().stream().map(ThemeDTO::fromModel).collect(Collectors.toList());
    }
    public ThemeDTO createOrGetTheme(ThemeDTO themeDTO) {
        Optional<Theme> existingTheme = themeRepository.findByName(themeDTO.getName());

        Theme theme;
        if (existingTheme.isPresent()) {
            theme = existingTheme.get();
        } else {
            theme = themeRepository.save(themeDTO.toModel());
        }

        return ThemeDTO.fromModel(theme);
    }
}
