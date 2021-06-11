package com.soulcode.blog.categoria;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/categorias")
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class CategoriaController {

    private CategoriaService categoriaService;

    //Criar Categorias
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Categoria criar(@RequestBody Categoria categoria) {
        return categoriaService.criar(categoria);
    }

    //Buscar Categoria
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Categoria buscar(@PathVariable("id") final Long id) {
        return categoriaService.buscar(id);
    }

    //Listar Categoria
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Categoria> listar() {
        log.info("listando categorias");
        return categoriaService.listar();
    }

}
