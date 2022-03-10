package com.mlo.springpgbackend.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.mlo.springpgbackend.model.Podcast;
import com.mlo.springpgbackend.repository.PodcastRepository;

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
public class PodcastController {

  @Autowired
  PodcastRepository podcastRepository;

  @GetMapping("/podcasts")
  public ResponseEntity<List<Podcast>> getAllpodcasts(
      @RequestParam(required = false) String sort,
      @RequestParam(required = false) String order) {
    try {
      List<Podcast> podcasts = new ArrayList<Podcast>();
      if (sort == null || order == null) {
        podcasts = podcastRepository.findAllByOrderByIdAsc();
      } else if (sort.equals("title") && order.equals("asc")) {
        podcasts = podcastRepository.findAllByOrderByTitleAsc();
        System.out.println("title asc");
      } else if (sort.equals("title") && order.equals("desc")) {
        podcasts = podcastRepository.findAllByOrderByTitleDesc();
      } else if (sort.equals("author") && order.equals("asc")) {
        podcasts = podcastRepository.findAllByOrderByNameAsc();
      } else if (sort.equals("author") && order.equals("desc")) {
        podcasts = podcastRepository.findAllByOrderByNameDesc();
      }
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
    try {
      Podcast newPodcast = podcastRepository.save(podcast);
      return new ResponseEntity<>(newPodcast, HttpStatus.CREATED);
    } catch (Exception e) {
      e.printStackTrace();
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping("/podcasts/{id}")
  public ResponseEntity<HttpStatus> deletePodcast(@PathVariable("id") long id) {
    try {
      podcastRepository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping("/podcasts")
  public ResponseEntity<HttpStatus> deleteAllPodcasts() {
    try {
      podcastRepository.deleteAll();
      return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping("/podcasts/{id}/like")
  public ResponseEntity<Podcast> likeAPodcast(@PathVariable("id") long id) {
    try {
      Optional<Podcast> podcast = podcastRepository.findById(id);
      if (podcast.isPresent()) {
        Podcast podcastData = podcastRepository.getById(id);
        System.out.println(podcastData);
        podcastData.setLikes(podcastData.getLikes() + 1);
        podcastRepository.save(podcastData);
        return new ResponseEntity<>(podcastData, HttpStatus.OK);
      } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
    } catch (Exception e) {
      e.printStackTrace();
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  

}
