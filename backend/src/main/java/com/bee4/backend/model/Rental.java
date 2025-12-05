package com.bee4.backend.model;

import java.util.List;

public class Rental {
    private Long id;
    private String title;
    private String description;
    private String address;
    private double price;
    private int bedrooms;
    private int bathrooms;
    private List<String> images;
    private List<String> tags;

    public Rental() {}

    public Rental(Long id, String title, String description, String address, double price,
                  int bedrooms, int bathrooms, List<String> images, List<String> tags) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.address = address;
        this.price = price;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.images = images;
        this.tags = tags;
    }

    // getters & setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
    public int getBedrooms() { return bedrooms; }
    public void setBedrooms(int bedrooms) { this.bedrooms = bedrooms; }
    public int getBathrooms() { return bathrooms; }
    public void setBathrooms(int bathrooms) { this.bathrooms = bathrooms; }
    public List<String> getImages() { return images; }
    public void setImages(List<String> images) { this.images = images; }
    public List<String> getTags() { return tags; }
    public void setTags(List<String> tags) { this.tags = tags; }
}
