package com.soulcode.blog.likes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {

    Long countByIdPost(Long idPost);

    Optional<Like> findByIdUsuarioAndIdPost(Long idUsuario, Long idPost);
}
