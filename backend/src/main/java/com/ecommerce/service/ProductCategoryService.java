package com.ecommerce.service;

import com.ecommerce.entity.Product;
import com.ecommerce.entity.ProductCategory;
import com.ecommerce.repository.ProductCategoryRepository;
import com.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductCategoryService
{
    @Autowired
    private ProductCategoryRepository categoryRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<ProductCategory> getAllCategories()
    {
        return categoryRepository.findAll();
    }

    public ProductCategory getCategoryById(Long id)
    {
        return categoryRepository.findById(id).get();
    }


    public List<Product> getProductByCategoryId(Long id) {
        return productRepository.findByCategoryId(id);
    }

    /*
    public Page<Product> getProductByCategoryId(Long id, Pageable pageable) {
        return productRepository.findByCategoryId(id, pageable);
    }
     */

}
