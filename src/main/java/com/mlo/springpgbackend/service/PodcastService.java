package com.mlo.springpgbackend.service;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.listennotes.podcast_api.ApiResponse;
import com.listennotes.podcast_api.Client;
import com.listennotes.podcast_api.exception.ListenApiException;
import com.mlo.springpgbackend.model.Podcast;

import org.springframework.stereotype.Service;

@Service
public class PodcastService {

  public JsonObject getInitialData() {
    JsonObject sampleList = new JsonObject();

    try {
      URL url = new URL(
          "https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json");

      // HttpURLConnection is a derived class of URLConnection with extra methods like
      // setRequestMethod
      // connect to the URL using java's library
      // maybe refactor this to use REST template class
      HttpURLConnection conn = (HttpURLConnection) url.openConnection();
      conn.setRequestMethod("GET");
      conn.connect();
      int responseCode = conn.getResponseCode();

      if (responseCode != 200) {
        throw new RuntimeException("HttpResponseCode: " + responseCode);
      } else {

        // Convert to a JSON object to print data
        // Convert the input stream to a json element
        InputStreamReader reader = new InputStreamReader((InputStream) conn.getContent());
        JsonElement data = JsonParser.parseReader(reader);
        JsonObject dataObj = data.getAsJsonObject();

        sampleList = dataObj;
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    return sampleList;
  }

  // this method is mock up for sample list data
  public JsonArray searchByName(String name) {
    JsonObject allData = getInitialData();
    JsonArray matching = allData.getAsJsonArray("podcasts");
    return matching;
  }

  // this method is mock up for sample list data
  public JsonArray searchByTitle(String title) {
    JsonObject allData = getInitialData();
    JsonArray matching = allData.getAsJsonArray("podcasts");
    return matching;
  }

  public List<Podcast> getApiData(String userReqParams, String selectedOption) {

    List<Podcast> results = new ArrayList<Podcast>();

    // for heroku deploy
    String API_KEY = System.getenv("LISTEN_NOTES_API_KEY");

    try {
      // Listen API's Java client
      Client objClient = new Client(API_KEY);
      HashMap<String, String> parameters = new HashMap<>();
      parameters.put("q", userReqParams);
      parameters.put("only_in", selectedOption);
      parameters.put("language", "English");
      ApiResponse response = objClient.search(parameters);

      JsonElement dataElement = JsonParser.parseString(response.toJSON().toString());
      JsonObject dataObj = dataElement.getAsJsonObject();
      JsonArray dataArray = dataObj.get("results").getAsJsonArray();

      for (JsonElement da : dataArray) {
        JsonObject episodeObj = da.getAsJsonObject();
        JsonObject podcastObj = episodeObj.get("podcast").getAsJsonObject();

        String name = podcastObj.get("publisher_original").getAsString();

        String description = episodeObj.get("description_highlighted").getAsString();

        // there is an issue if any values are null
        String source = episodeObj.get("link").getAsString();

        String audio = episodeObj.get("audio").getAsString();

        String image = episodeObj.get("image").getAsString();

        String title = episodeObj.get("title_original").getAsString();

        Podcast parsedPodcast = new Podcast(name, description, source, audio, image, title);

        results.add(parsedPodcast);
      }
      return results;

    } catch (ListenApiException e) {
      e.printStackTrace();
      return results;
    }
  }

}
