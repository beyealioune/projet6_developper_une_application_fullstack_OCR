package com.openclassrooms.mddapi.SecurityGlobal;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


import javax.servlet.Filter;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
        @Autowired
        TokenFilter tokenFilter;


/**
 * Configure la chaîne de filtres de sécurité pour l'application.
 *
 * @param http Objet HttpSecurity à configurer.
 * @return SecurityFilterChain configuré.
 * @throws Exception Si une erreur de configuration se produit.
 */
        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
        .csrf(csrf -> csrf.disable())
        .authorizeHttpRequests((requests) -> requests
        .anyRequest().permitAll()
        )
                .addFilterBefore(tokenFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
        }

/**
 * Configure le filtre CORS pour permettre les requêtes Cross-Origin.
 *
 * @return CorsFilter configuré.
 */
        @Bean
        public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        config.addExposedHeader("Content-Type");
        config.addExposedHeader("Content-Disposition");
        config.addExposedHeader("Content-Length");
        config.addExposedHeader("Cache-Control");


        source.registerCorsConfiguration("/**", config);
        return new CorsFilter();
}

/**
 * Crée un bean pour l'encodeur BCryptPasswordEncoder utilisé pour le cryptage des mots de passe.
 *
 * @return BCryptPasswordEncoder bean.
 */
@Bean
public BCryptPasswordEncoder bCryptPasswordEncoder(){

        return new BCryptPasswordEncoder();
        }

        }
