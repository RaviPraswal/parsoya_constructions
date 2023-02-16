package com.parsoya.constructions.parsoya_constructions.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String houseNumber;
    private String street;
    private String city;
    private String country;
    private String state;
    private long pincode;
}
