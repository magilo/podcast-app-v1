package com.mlo.springpgbackend.controller;

import java.util.ArrayList;
import java.util.List;

import com.mlo.springpgbackend.model.LikesDislikes;
import com.mlo.springpgbackend.model.Podcast;
import com.mlo.springpgbackend.repository.LikesDislikesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class LikesDislikesController {

  @Autowired
  LikesDislikesRepository likesDislikesRepository;

  @PutMapping("/podcasts/{title}")
  public ResponseEntity<Podcast> updatePodcast(@PathVariable("title") long id, @RequestBody Podcast Podcast) {
    // Optional<Podcast> podcastData = PodcastRepository.findById(id);
    // if (PodcastData.isPresent()) {
    // Podcast _Podcast = PodcastData.get();
    // _Podcast.setTitle(Podcast.getTitle());
    // _Podcast.setDescription(Podcast.getDescription());
    // _Podcast.setPublished(Podcast.isPublished());
    // return new ResponseEntity<>(PodcastRepository.save(_Podcast), HttpStatus.OK);
    // } else {
    // return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    // }
    return null;
  }

}
