package com.ecommerce.repository;

import com.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    public List<Product> findByCategoryId(Long id);

}
