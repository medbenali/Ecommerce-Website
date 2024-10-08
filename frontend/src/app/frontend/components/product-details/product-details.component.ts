import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/frontend/models/product';
import { ProductCategory } from 'src/app/frontend/models/product-category';
import { ProductService } from 'src/app/frontend/services/product.service';

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
    discountPrice: 0,
    imageUrl: '',
    productReview: 0,
    active: false,
    unitsInStock: 0,
    dateCreated: new Date(),
    lastUpdate: new Date(),
    category: new ProductCategory(0, "")
  }

  discountPercent: number = 0;



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
        this.discountPercent = Math.round((this.product.discountPrice / this.product.unitPrice)*100);
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }



}
