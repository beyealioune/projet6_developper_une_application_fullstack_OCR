package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.Dtos.ThemeDTO;
import com.openclassrooms.mddapi.repository.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ThemeService {
    @Autowired
    private ThemeRepository themeRepository;

    public List<ThemeDTO> getAllThemes() {
        return themeRepository.findAll().stream().map(ThemeDTO::fromModel).collect(Collectors.toList());
    }
}
