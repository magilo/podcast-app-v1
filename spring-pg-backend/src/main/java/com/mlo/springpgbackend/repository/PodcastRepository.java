package com.mlo.springpgbackend.repository;

import com.mlo.springpgbackend.model.Podcast;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PodcastRepository extends JpaRepository<Podcast, Long> {
  // refer to sorting tutorial
  // https://www.bezkoder.com/spring-data-sort-multiple-columns/
}
