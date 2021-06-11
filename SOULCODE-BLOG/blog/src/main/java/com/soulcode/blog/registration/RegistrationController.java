package com.soulcode.blog.registration;

import com.soulcode.blog.usuario.Usuario;
import com.soulcode.blog.usuario.UsuarioService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@AllArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class RegistrationController {

    private UsuarioService usuarioService;

    @PostMapping("/registration")
    public Usuario registerUser(@RequestBody Usuario usuario) throws Exception {
        String tempUsername = usuario.getUsername();
        if (tempUsername != null && !"".equals(tempUsername)) {
            Optional<Usuario> user = usuarioService.buscaPorUsername(tempUsername);
            if (user.isPresent()) {
                throw new Exception("Username " + tempUsername + " já existe.");
            }
        }
        return usuarioService.criar(usuario);
    }

    @GetMapping("/login/{username}/{senha}")
    public Usuario loginUser(@PathVariable("username") String username, @PathVariable("senha") String senha) throws Exception {
        log.info("chamou login");
        String tempUsername = username;
        String tempPass = senha;
        Usuario userObj = null;
        if (tempUsername != null && tempPass != null) {
            userObj = usuarioService.buscaPorUsernameESenha(tempUsername, tempPass);
        }
        if (userObj == null) {
            throw new Exception("Credencial ruim.");
        }
        return userObj;
    }

}
