package com.mlo.springpgbackend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {

  @GetMapping("")
  public ModelAndView home() {
    ModelAndView indexPage = new ModelAndView("index");
    return indexPage;
  }

}
