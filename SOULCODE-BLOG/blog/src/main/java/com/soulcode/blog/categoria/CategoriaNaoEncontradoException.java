package com.soulcode.blog.categoria;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CategoriaNaoEncontradoException extends RuntimeException {

    public CategoriaNaoEncontradoException(Long id) {
        super("Não foi possível encontrar a categoria com id " + id + ".");
    }
}
