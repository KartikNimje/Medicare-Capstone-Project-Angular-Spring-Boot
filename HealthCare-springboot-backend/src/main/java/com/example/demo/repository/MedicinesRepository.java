package com.example.demo.repository;

import com.example.demo.pojo.Medicines;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicinesRepository extends JpaRepository<Medicines, Long>{

}
