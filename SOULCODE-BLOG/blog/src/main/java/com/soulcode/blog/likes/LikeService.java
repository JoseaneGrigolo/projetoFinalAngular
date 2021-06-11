package com.soulcode.blog.likes;

import com.soulcode.blog.post.PostNaoEncontradoException;
import com.soulcode.blog.post.PostRepository;
import com.soulcode.blog.usuario.Usuario;
import com.soulcode.blog.usuario.UsuarioNaoEncontradoException;
import com.soulcode.blog.usuario.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class LikeService {

    private UsuarioRepository usuarioRepository;

    private PostRepository postRepository;

    private LikeRepository likeRepository;

    public void dahLike(Long idPost, String username) {
        Usuario usuario = usuarioRepository.findByUsername(username).orElseThrow(() -> new UsuarioNaoEncontradoException(username));
        postRepository.findById(idPost).orElseThrow(() -> new PostNaoEncontradoException(idPost));

        Optional<Like> existingLike = likeRepository.findByIdUsuarioAndIdPost(usuario.getIdUsuario(), idPost);
        if (existingLike.isPresent()) {
            throw new RuntimeException("Você já deu like neste post!");
        }

        Like like = new Like();
        like.setIdPost(idPost);
        like.setIdUsuario(usuario.getIdUsuario());
        likeRepository.save(like);
    }
}
