package com.mlo.springpgbackend.controller;

import java.util.ArrayList;
import java.util.List;

import com.mlo.springpgbackend.model.Podcast;
import com.mlo.springpgbackend.repository.PodcastRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class PodcastController {

  @Autowired
  PodcastRepository podcastRepository;

  @GetMapping("/test")
  String home() {
    try {
      Podcast newPodcast = podcastRepository.save(new Podcast());
      ResponseEntity<Podcast> entity = new ResponseEntity<>(newPodcast, HttpStatus.CREATED);
      System.out.println(entity.toString());
      return "test done";
    } catch (Exception e) {
      e.printStackTrace();
      // return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return "Hello World!";
  }

  @GetMapping("/podcasts")
  public ResponseEntity<List<Podcast>> getAllpodcasts() {
    try {
      List<Podcast> podcasts = new ArrayList<Podcast>();
      podcastRepository.findAll().forEach(podcasts::add);

      if (podcasts.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(podcasts, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PostMapping("/podcasts")
  public ResponseEntity<Podcast> addPodcast(@RequestBody Podcast podcast) {
    System.out.println("hellooooo" + podcast);
    try {
      Podcast newPodcast = podcastRepository.save(podcast);
      return new ResponseEntity<>(newPodcast, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
