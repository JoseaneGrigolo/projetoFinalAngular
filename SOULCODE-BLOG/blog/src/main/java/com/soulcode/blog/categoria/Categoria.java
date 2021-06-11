package com.soulcode.blog.categoria;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.soulcode.blog.post.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCategoria;

    private String descricao;

    @OneToMany(mappedBy = "categoria")
    @JsonIgnore
    private List<Post> posts;
}
