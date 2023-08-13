package com.ecommerce.controller;

import com.ecommerce.entity.Product;
import com.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class ProductController
{
    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<Product> getAllProducts(@RequestParam(required = false) String name)
    {
        if(name != null)
        {
            return productService.searchProductsByName(name);
        }

        else
        {
            return productService.getAllProducts();
        }

    }
    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable Long id)
    {
        return productService.getProductById(id);
    }



}
