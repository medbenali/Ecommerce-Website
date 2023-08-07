package com.ecommerce.controller;

import com.ecommerce.entity.Product;
import com.ecommerce.entity.ProductCategory;
import com.ecommerce.service.ProductCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class ProductCategoryController {

    @Autowired
    private ProductCategoryService categoryService;

    @GetMapping("/product-category")
    public List<ProductCategory> getAllCategories()
    {
        return categoryService.getAllCategories();
    }

    @GetMapping("/product-category/{id}")
    public ProductCategory getCategoryById(@PathVariable Long id)
    {
        return categoryService.getCategoryById(id);
    }

    @GetMapping("/product-category/{id}/products")
    public List<Product> getProductByCategoryId(@PathVariable Long id)
    {
        return categoryService.getProductByCategoryId(id);
    }


}
