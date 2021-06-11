package com.soulcode.blog.usuario;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UsuarioService {

    private UsuarioRepository usuarioRepository;

    public Usuario criar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Optional<Usuario> buscaPorUsername(String username) {
        return usuarioRepository.findByUsername(username);
    }

    public Usuario buscaPorUsernameESenha(String username, String senha) {
        return usuarioRepository.findByUsernameAndSenha(username, senha);
    }

    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }
}
