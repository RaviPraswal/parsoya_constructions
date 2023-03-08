package com.parsoya.constructions.parsoya_constructions.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.parsoya.constructions.parsoya_constructions.model.User;
import com.parsoya.constructions.parsoya_constructions.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("/api/v1/")
@ResponseBody
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/t")
    public String test(){
        return "Hello World";
    }

    //get all users
    @GetMapping("/users")
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }
}