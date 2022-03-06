package com.mlo.springpgbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity // JPA annotation denotes the whole class for storage in a relational table
@Table(name = "podcasts") // provides the table that maps this entity
public class Podcast {

  @Id // for the primary key
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  @Column(name = "name")
  private String name;
  @Column(name = "description", length = 1024)
  private String description;
  @Column(name = "source")
  private String source;
  @Column(name = "audio")
  private String audio;
  @Column(name = "image")
  private String image;
  @Column(name = "title")
  private String title;
  @Column(name = "likes")
  private int likes;
  @Column(name = "dislikes")
  private int dislikes;

  // default constructor
  public Podcast() {

  }

  public Podcast(String name, String description, String source, String audio, String image, String title) {
    this.name = name;
    this.description = description;
    this.source = source;
    this.audio = audio;
    this.image = image;
    this.title = title;
    this.likes = 0;
    this.dislikes = 0;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getSource() {
    return source;
  }

  public void setSource(String source) {
    this.source = source;
  }

  public String getAudio() {
    return audio;
  }

  public void setAudio(String audio) {
    this.audio = audio;
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public int getLikes() {
    return likes;
  }

  public void setLikes(int likes) {
    this.likes = likes;
  }

  public int getDislikes() {
    return dislikes;
  }

  public void setDislikes(int dislikes) {
    this.dislikes = dislikes;
  }

  @Override
  public String toString() {
    return "Podcast [id=" + id +
        ", name=" + name +
        ", description=" + description +
        ", source=" + source +
        ", audio=" + audio +
        ", image=" + image +
        ", title=" + title +
        ", likes=" + likes +
        ", dislikes=" + dislikes + "]";
  }

}
