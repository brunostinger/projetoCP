package com.marketplace.marketplace.service;

import com.marketplace.marketplace.model.Product;
import com.marketplace.marketplace.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public Product addProduct(Product product){
        return productRepository.save(product);
    }

    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    public Product updateProduct(Product product){
        return productRepository.save(product);
    }

    public void deleteProduct(Product product){
         productRepository.delete(product);
    }

    public Product getProductById(Integer id){
        return productRepository.findById(id).get();
    }
}
