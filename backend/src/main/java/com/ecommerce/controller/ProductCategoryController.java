package com.ecommerce.controller;

import com.ecommerce.entity.Product;
import com.ecommerce.entity.ProductCategory;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.service.ProductCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class ProductCategoryController {

    @Autowired
    private ProductCategoryService categoryService;

    @Autowired
    private ProductRepository productRepository;

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


    /*
    @GetMapping("/product-category/{id}/products")
    public List<Product> getProductByCategoryId(@PathVariable Long id)
    {
        return categoryService.getProductByCategoryId(id);
    }
     */




    @GetMapping("/product-category/{id}/products")
    public ResponseEntity<LinkedHashMap<String, Object>> getAllProducts(
            @PathVariable long id,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    )
    {
        try
        {
            List<Product> products = new ArrayList<Product>();
            Pageable paging = PageRequest.of(page, size);

            Page<Product> pageProducts;


            pageProducts = productRepository.findByCategoryId(id, paging);

            products = pageProducts.getContent();

            LinkedHashMap<String, Object> response = new LinkedHashMap<>();
            response.put("products", products);
            response.put("size", pageProducts.getSize());
            response.put("totalElements", pageProducts.getTotalElements());
            response.put("totalPages", pageProducts.getTotalPages());
            response.put("number", pageProducts.getNumber());


            return new ResponseEntity<>(response, HttpStatus.OK);


        }

        catch (Exception e)
        {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }





}
