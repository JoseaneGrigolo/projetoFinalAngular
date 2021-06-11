package com.soulcode.blog.post;

import com.soulcode.blog.categoria.Categoria;
import com.soulcode.blog.categoria.CategoriaNaoEncontradoException;
import com.soulcode.blog.categoria.CategoriaRepository;
import com.soulcode.blog.likes.LikeRepository;
import com.soulcode.blog.usuario.Usuario;
import com.soulcode.blog.usuario.UsuarioNaoEncontradoException;
import com.soulcode.blog.usuario.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class PostService {

    private PostRepository postRepository;
    private UsuarioRepository usuarioRepository;
    private CategoriaRepository categoriaRepository;
    private LikeRepository likeRepository;

    public List<Post> listar() {
        List<Post> posts = postRepository.findAll();
        posts.forEach(post -> post.setQtdeLikes(likeRepository.countByIdPost(post.getId())));
        return posts;
    }

    public Post criar(String username, Long idCategoria, CreatePost createPost) {
        Usuario usuario = usuarioRepository.findByUsername(username).orElseThrow(() -> new UsuarioNaoEncontradoException(username));
        Categoria categoria = categoriaRepository.findById(idCategoria).orElseThrow(() -> new CategoriaNaoEncontradoException(idCategoria));

        Post post = new Post();
        post.setTitulo(createPost.getTitulo());
        post.setConteudo(createPost.getConteudo());
        post.setUsuario(usuario);
        post.setCategoria(categoria);
        post.setDataCriacao(LocalDateTime.now());
        post.setQtdeLikes(0L);
        return postRepository.save(post);
    }

    public Post buscar(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new PostNaoEncontradoException(id));
        post.setQtdeLikes(likeRepository.countByIdPost(id));
        return post;
    }

    public List<Post> buscarPorUsuario(String username) {
        Usuario usuario = usuarioRepository.findByUsername(username).orElseThrow(() -> new UsuarioNaoEncontradoException(username));
        List<Post> posts = postRepository.findAllByUsuario_idUsuario(usuario.getIdUsuario());
        posts.forEach(post -> post.setQtdeLikes(likeRepository.countByIdPost(post.getId())));
        return posts;
    }


    public Post editar(Long id, Post post) {
        Post existente = postRepository.findById(id).orElseThrow(() -> new PostNaoEncontradoException(id));
        existente.setTitulo(post.getTitulo());
        existente.setConteudo(post.getConteudo());
        postRepository.save(existente);
        return existente;
    }

    public void excluir(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new PostNaoEncontradoException(id));
        postRepository.delete(post);
    }
}
