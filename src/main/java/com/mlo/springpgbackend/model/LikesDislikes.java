package com.mlo.springpgbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "likesdislikes")
public class LikesDislikes {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  @Column(name = "likes")
  private int likes;
  @Column(name = "dislikes")
  private int dislikes;
  // @Column(name = "apiId")
  // private String apiId;
  @Column(name = "title")
  private String title;

  public LikesDislikes() {
  }

  public LikesDislikes(int likes, int dislikes, String title) {
    this.likes = likes;
    this.dislikes = dislikes;
    this.title = title;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
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

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

}
