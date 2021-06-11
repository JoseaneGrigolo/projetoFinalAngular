package com.soulcode.blog.likes;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class LikeController {

    private LikeService likeService;

    @GetMapping("/like/{idPost}/usuario/{username}")
    public void dahLike(@PathVariable("idPost") Long idPost, @PathVariable("username") String username) {
        likeService.dahLike(idPost, username);
    }
}
