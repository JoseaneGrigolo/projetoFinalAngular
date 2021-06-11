package com.soulcode.blog.categoria;

import com.soulcode.blog.usuario.Usuario;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoriaService {

    private CategoriaRepository categoriaRepository;

    public Categoria criar(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    public Categoria buscar(Long id) {
        Categoria categoria = categoriaRepository.findById(id).orElseThrow(() -> new CategoriaNaoEncontradoException(id));
        return categoria;
    }

    public List<Categoria> listar() {
        return categoriaRepository.findAll();
    }
}
