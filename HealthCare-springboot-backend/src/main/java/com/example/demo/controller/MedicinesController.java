package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.pojo.Medicines;
import com.example.demo.repository.MedicinesRepository;

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
public class MedicinesController {

	@Autowired
	MedicinesRepository medicinesRepository;
	
	//get all Medicines
		@GetMapping("/medicines")
		public List<Medicines> getAllMedicines(){
			return medicinesRepository.findAll();
		}
		
		//Create Medicines rest api
		@PostMapping("/medicines")
		public Medicines createMedicines(@RequestBody Medicines medicines) {
			return medicinesRepository.save(medicines);
		}
		
		//get employee by id rest api
		@GetMapping("/medicines/{id}")
		public ResponseEntity<Medicines> getMedicinesById(@PathVariable Long id) {
			Medicines medicines= medicinesRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Medicines not exist with id :"+id));
			return ResponseEntity.ok(medicines);
		}
		
		//update employee rest api
		@PutMapping("/medicines/{id}")
		public ResponseEntity<Medicines> updateMedicines(@PathVariable Long id, @RequestBody Medicines medicinesDetails){
			Medicines medicines= medicinesRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Medicines not exist with id :"+id));
			medicines.setName(medicinesDetails.getName());
			medicines.setBrand(medicinesDetails.getBrand());
			medicines.setPrice(medicinesDetails.getQuantity());
			medicines.setPrice(medicinesDetails.getPrice());
			
			Medicines updatedMedicines = medicinesRepository.save(medicines);
			 return ResponseEntity.ok(updatedMedicines);
		}
		
		//delete employee rest api
		@DeleteMapping("/medicines/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteMedicines(@PathVariable Long id){
			Medicines medicines= medicinesRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Medicines not exist with id :"+id));
			medicinesRepository.delete(medicines);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
