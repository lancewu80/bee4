package com.bee4.backend.controller;

import com.bee4.backend.model.Rental;
import com.bee4.backend.service.RentalService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rentals")
public class RentalController {

    private final RentalService rentalService;

    public RentalController(RentalService rentalService) {
        this.rentalService = rentalService;
    }

    @GetMapping
    public List<Rental> list() {
        return rentalService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rental> getById(@PathVariable Long id) {
        return rentalService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
