package com.mlo.springpgbackend.repository;

import com.mlo.springpgbackend.model.LikesDislikes;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LikesDislikesRepository extends JpaRepository<LikesDislikes, Long> {

}
