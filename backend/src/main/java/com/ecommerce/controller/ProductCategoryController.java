package com.ecommerce.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductCategoryController {

    @GetMapping("/product-category")
    public String getAllCategories()
    {
        return "All Categories1";
    }
}
