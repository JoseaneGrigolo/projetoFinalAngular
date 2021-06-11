package com.soulcode.blog.post;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class PostNaoEncontradoException extends RuntimeException {

    public PostNaoEncontradoException(Long id) {
        super("Não foi possível encontrar o post com id " + id + ".");
    }
}

