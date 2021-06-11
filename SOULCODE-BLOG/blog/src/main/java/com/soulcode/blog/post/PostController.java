package com.soulcode.blog.post;

import com.soulcode.blog.usuario.Usuario;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {

    private PostService postService;

    //Listar Posts
    @GetMapping("/posts")
    @ResponseStatus(HttpStatus.OK)
    public List<Post> listar() {
        log.info("listar posts");
        return postService.listar();
    }

    //Criar Posts
    @PostMapping("/posts/{username}/categorias/{idCategoria}")
    @ResponseStatus(HttpStatus.CREATED)
    public Post criar(@PathVariable("username") String username, @PathVariable("idCategoria") Long idCategoria, @RequestBody CreatePost post) {
        return postService.criar(username, idCategoria, post);
    }

    //Buscar um Post
    @GetMapping("/posts/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Post buscar(@PathVariable("id") final Long id) {
        return postService.buscar(id);
    }


    //Buscar um Post
    @GetMapping("/posts/byuser/{username}")
    @ResponseStatus(HttpStatus.OK)
    public List<Post> buscarPorUsuario(@PathVariable("username") String username) {
        return postService.buscarPorUsuario(username);
    }


    //Editar Posts
    @PutMapping("/posts/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Post editar(@PathVariable("id") final Long id, @RequestBody Post post) {
        return postService.editar(id, post);
    }

    //Excluir Post
    @DeleteMapping("/posts/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void excluir(@PathVariable("id") final Long id) {
        postService.excluir(id);

    }
}
