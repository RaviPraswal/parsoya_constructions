
package com.parsoya.constructions.parsoya_constructions.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.parsoya.constructions.parsoya_constructions.model.User;
import com.parsoya.constructions.parsoya_constructions.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    //get all users
    public List<User> getAllUser(){
        return userRepo.findAll();
    }

    public User addUser(User user) {
        return userRepo.save(user);
    }
}
