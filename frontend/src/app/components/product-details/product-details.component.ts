import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductCategory } from 'src/app/models/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = {
    id: '',
    sku: '',
    name: '',
    description: '',
    unitPrice: 0,
    imageUrl: '',
    active: false,
    unitsInStock: 0,
    dateCreated: new Date(),
    lastUpdate: new Date(),
    category: new ProductCategory(0, "")
  }



  constructor(private productService: ProductService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    
    const id = this.route.snapshot.params['id'];
    this.getProductById(id);
  }


  
    
  getProductById(id:  number)
  {
    this.productService.getProductById(id)
    .subscribe({
      next: (data) => {
        this.product = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }



}
