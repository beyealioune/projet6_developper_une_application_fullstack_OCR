package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.Dtos.ThemeDTO;
import com.openclassrooms.mddapi.services.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/themes")
public class ThemeController {
    @Autowired
    private ThemeService themeService;

    @GetMapping
    public List<ThemeDTO> getAllThemes() {
        return themeService.getAllThemes();
    }
}
