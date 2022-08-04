package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.pojo.Cart;
import com.example.demo.repository.CartRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/medicare/")
public class CartController {

	@Autowired
	private CartRepository cartRepository;
	
	//get all Medicines
			@GetMapping("/cart")
			public List<Cart> getAllCart(){
				return cartRepository.findAll();
			}
	//Create Cart rest api
			@PostMapping("/cart")
			public Cart createCart(@RequestBody Cart cart) {
				return cartRepository.save(cart);
			}	
	//get Cart by id rest api
			@GetMapping("/cart/{id}")
			public ResponseEntity<Cart> getCartById(@PathVariable Integer id) {
				Cart cart= cartRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException("Cart not exist with id :"+id));
				return ResponseEntity.ok(cart);
			}
	//update Cart rest api
			@PutMapping("/cart/{id}")
			public ResponseEntity<Cart> updateCart(@PathVariable Integer id, @RequestBody Cart cartDetails){
				Cart cart= cartRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException("Cart not exist with id :"+id));
				cart.setPrice(cartDetails.getQuantity());
				
				Cart updatedCart = cartRepository.save(cart);
				 return ResponseEntity.ok(updatedCart);
			}
	//delete Cart rest api
			@DeleteMapping("/cart/{id}")
			public ResponseEntity<Map<String, Boolean>> deleteCart(@PathVariable Integer id){
				Cart cart= cartRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException("Cart not exist with id :"+id));
				cartRepository.delete(cart);
				Map<String, Boolean> response = new HashMap<>();
				response.put("deleted", Boolean.TRUE);
				return ResponseEntity.ok(response);
			}
			
			
	
	
}
