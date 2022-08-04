package com.example.demo.controller;

import java.util.List;

import com.example.demo.pojo.User;
import com.example.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/medicare/")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;

	//get all users
	@GetMapping("/user")
	public List<User> getAllUser(){
		return userRepository.findAll();	
	}
	
	//register user
	@PostMapping("/user")
	public User registerUser(@RequestBody User user) {
		return userRepository.save(user);
	}
}
