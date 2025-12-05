package com.bee4.backend.service;

import com.bee4.backend.model.Rental;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RentalService {
    private final List<Rental> rentals = new ArrayList<>();

    public RentalService() {
        // Initialize with sample data
        rentals.add(new Rental(1L, "Modern Downtown Apartment", 
            "Beautiful 2-bedroom apartment in the heart of the city with stunning views",
            "Downtown, New York", 2500.0, 2, 2, 1200.0, 
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", "Apartment"));
        
        rentals.add(new Rental(2L, "Cozy Suburban House", 
            "Spacious 3-bedroom house with large backyard, perfect for families",
            "Suburban Area, California", 3200.0, 3, 2, 1800.0, 
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994", "House"));
        
        rentals.add(new Rental(3L, "Luxury Penthouse", 
            "Premium penthouse with panoramic city views and modern amenities",
            "Manhattan, New York", 5500.0, 3, 3, 2500.0, 
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", "Penthouse"));
        
        rentals.add(new Rental(4L, "Beach Villa", 
            "Stunning beachfront villa with private access to the beach",
            "Malibu, California", 4800.0, 4, 3, 3000.0, 
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6", "Villa"));
        
        rentals.add(new Rental(5L, "Studio Apartment", 
            "Compact and efficient studio perfect for singles or couples",
            "Brooklyn, New York", 1500.0, 1, 1, 600.0, 
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "Studio"));
    }

    public List<Rental> getAllRentals() {
        return new ArrayList<>(rentals);
    }

    public Optional<Rental> getRentalById(Long id) {
        return rentals.stream()
                .filter(rental -> rental.getId().equals(id))
                .findFirst();
    }
}
