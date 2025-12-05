package com.bee4.backend.service;

import com.bee4.backend.model.Rental;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.util.*;

@Service
public class RentalService {

    private final Map<Long, Rental> store = new HashMap<>();

    @PostConstruct
    public void init() {
        // sample data
        store.put(1L, new Rental(1L, "台北市中山區套房", "近捷運，採光佳。", "台北市中山區林森北路", 15000, 1, 1,
                List.of("https://via.placeholder.com/400x300.png?text=room1"),
                List.of("near-mrt", "sunny")));

        store.put(2L, new Rental(2L, "高雄市兩房", "交通便利，家具可談。", "高雄市前鎮區", 12000, 2, 1,
                List.of("https://via.placeholder.com/400x300.png?text=room2"),
                List.of("two-bed", "furnished")));
    }

    public List<Rental> findAll() {
        return new ArrayList<>(store.values());
    }

    public Optional<Rental> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }
}
