package com.marketplace.marketplace.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(nullable = false)
    String description;

    @Column(nullable = false)
    String supplierDesc;

    @Column(nullable = false)
    Double price;

}
