package com.ecommerce.controller;

import com.ecommerce.entity.Product;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.service.ProductService;
import com.sun.source.tree.Tree;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/products")
public class ProductController
{
    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;


    @GetMapping("/hello")
    public String hello()
    {
        return "Hello World !";
    }

    @GetMapping("/list")
    public List<String> myList()
    {
        return Arrays.asList("Java","Python","Angular");
    }


    /*
    @GetMapping("/products")
    public List<Product> getAllProducts1(@RequestParam(required = false) String name)
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
     */


    @GetMapping("")
    public ResponseEntity<LinkedHashMap<String, Object>> getAllProducts(
            @RequestParam(required = false) String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    )
    {
        try
        {
            List<Product> products = new ArrayList<Product>();
            Pageable paging = PageRequest.of(page, size);

            Page<Product> pageProducts;

            if(name == null)
            {
                pageProducts = productRepository.findAll(paging);
            }

            else
            {
                pageProducts = productRepository.findByNameContaining(name, paging);
            }

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
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id)
    {
        return productService.getProductById(id);
    }



}
