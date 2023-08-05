package com.ecommerce.controller;

import com.ecommerce.entity.Product;
import com.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController
{
    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<Product> getAllProducts()
    {
        return productService.getAllProducts();
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable Long id)
    {
        return productService.getProductById(id);
    }



}
