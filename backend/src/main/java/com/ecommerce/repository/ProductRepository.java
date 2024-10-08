package com.ecommerce.repository;

import com.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    public Page<Product> findAll(Pageable pageable);

    public Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);

    //public List<Product> findByCategoryId(Long id);

    // public Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);

    // public List<Product> findByNameContaining(String name);

    public Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable);



}
