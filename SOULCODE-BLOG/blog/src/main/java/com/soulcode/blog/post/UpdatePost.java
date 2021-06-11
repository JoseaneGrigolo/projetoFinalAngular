package com.soulcode.blog.post;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UpdatePost {

    private String titulo;

    private String conteudo;

    private Long idCategoria;
}
