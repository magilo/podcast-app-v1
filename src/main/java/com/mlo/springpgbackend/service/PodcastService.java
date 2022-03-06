package com.mlo.springpgbackend.service;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import org.springframework.stereotype.Service;

@Service
public class PodcastService {

  public JsonObject getInitialData() {
    JsonObject sampleList = new JsonObject();

    try {
      URL url = new URL(
          "https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json");

      // HttpURLConnection is a derived class of URLConnection
      // with extra methods like setRequestMethod
      // conn is should be renamed to request
      // connect to the URL using java's library
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

  public JsonArray searchByArtist(String artist) {
    JsonObject allData = getInitialData();
    // List<JsonObject> matching = new ArrayList<JsonObject>();
    JsonArray matching = allData.getAsJsonArray("podcasts");
    return matching;

  }

  public JsonArray searchByTitle(String title) {
    JsonObject allData = getInitialData();
    // List<JsonObject> matching = new ArrayList<JsonObject>();
    JsonArray matching = allData.getAsJsonArray("podcasts");
    return matching;
  }

}
