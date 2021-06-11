package com.soulcode.blog.usuario;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.soulcode.blog.post.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsuario;

    @NotBlank
    private String username;

    @NotBlank
    private String senha;

    @NotBlank
    @Email
    private String email;

    @OneToMany(mappedBy = "usuario")
    @JsonIgnore
    private List<Post> posts;

}