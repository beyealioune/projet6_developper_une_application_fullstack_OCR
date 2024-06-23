package com.openclassrooms.mddapi.repository;

import com.openclassrooms.mddapi.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    Optional<User> findByEmail(String mail);

    boolean existsByEmail(String email);


}
