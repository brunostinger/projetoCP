package com.marketplace.marketplace.controller;

import com.marketplace.marketplace.model.Product;
import com.marketplace.marketplace.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/product")
public class ProductController{

    ProductService productService;

    @PostMapping("/add")
    public ResponseEntity addProduct(@RequestBody Product product){
        Product newProduct =  productService.addProduct(product);
        return new ResponseEntity(newProduct, HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public List<Product> getProducts(){
        return productService.getProducts();
    }

    @GetMapping("/list/{id}")
    public Product getProduct(@PathVariable Integer id){
        return productService.getProductById(id);
    }

    @PatchMapping("/update")
    public Product updateProduct(@RequestBody Product product){
        return productService.updateProduct(product);
    }

    @DeleteMapping("/delete")
    public ResponseEntity deleteProduct(@RequestBody Product product){
         productService.deleteProduct(product);
         return new ResponseEntity("Deleted", HttpStatus.NO_CONTENT);
    }

}
