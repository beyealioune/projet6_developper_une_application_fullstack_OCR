package com.openclassrooms.mddapi.jwt;

public interface TokenSigner {
    String signToken(String token);
}
