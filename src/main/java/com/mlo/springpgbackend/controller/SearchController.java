package com.mlo.springpgbackend.controller;

import java.util.List;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.listennotes.podcast_api.ApiResponse;
import com.mlo.springpgbackend.model.Podcast;
import com.mlo.springpgbackend.service.PodcastService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class SearchController {

  @Autowired
  private PodcastService podcastService;

  @GetMapping("/samplelist")
  public ResponseEntity<JsonObject> getAllData() {
    try {
      JsonObject sampleList = podcastService.getInitialData();

      // if (podcasts.isEmpty()) {
      // return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      // }
      return new ResponseEntity<>(sampleList, HttpStatus.OK);

    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("samplelist/search")
  public ResponseEntity<JsonArray> searchSampleList(
      @RequestParam(required = false) String name,
      @RequestParam(required = false) String title) {
    try {
      if (name != null) {
        System.out.println("title " + title);
        System.out.println("name " + name);
        JsonArray matchingName = podcastService.searchByName(name);
        return new ResponseEntity<>(matchingName, HttpStatus.OK);
      }

      if (title != null) {
        System.out.println("title " + title);
        System.out.println("name " + name);
        JsonArray matchingTitle = podcastService.searchByTitle(title);
        return new ResponseEntity<>(matchingTitle, HttpStatus.OK);
      }
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      e.printStackTrace();
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @GetMapping("podcasts/search")
  public ResponseEntity<List<Podcast>> searchPodcasts(
      @RequestParam(required = false) String author,
      @RequestParam(required = false) String title) {
    try {
      if (author != null) {
        System.out.println("title " + title);
        System.out.println("author " + author);
        // JsonArray matchingName = podcastService.searchByName(author);

        List<Podcast> searchForName = podcastService.getApiData(author, "author");
        System.out.println("searchName " + searchForName);
        return new ResponseEntity<>(searchForName, HttpStatus.OK);
      }

      if (title != null) {
        System.out.println("title " + title);
        System.out.println("author " + author);
        // JsonArray matchingTitle = podcastService.searchByTitle(title);
        List<Podcast> matchingTitle = podcastService.getApiData(title, "title");
        return new ResponseEntity<>(matchingTitle, HttpStatus.OK);
      }
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      e.printStackTrace();
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

}

/**
 *
 * @GetMapping("podcasts/search")
 * public ResponseEntity<JsonArray> searchPodcasts(
 *
 * @RequestParam(required = false) String author,
 * @RequestParam(required = false) String title) {
 *                        try {
 *                        if (author != null) {
 *                        System.out.println("title " + title);
 *                        System.out.println("name " + author);
 *                        JsonArray matchingName =
 *                        podcastService.searchByName(author);
 *
 *                        List<Podcast> searchName =
 *                        podcastService.getApiData(author);
 *                        System.out.println("searchName " + searchName);
 *                        return new ResponseEntity<>(matchingName,
 *                        HttpStatus.OK);
 *                        }
 *
 *                        if (title != null) {
 *                        System.out.println("title " + title);
 *                        System.out.println("name " + author);
 *                        JsonArray matchingTitle =
 *                        podcastService.searchByTitle(title);
 *                        return new ResponseEntity<>(matchingTitle,
 *                        HttpStatus.OK);
 *                        }
 *                        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
 *                        } catch (Exception e) {
 *                        e.printStackTrace();
 *                        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
 *                        }
 *                        }
 */
