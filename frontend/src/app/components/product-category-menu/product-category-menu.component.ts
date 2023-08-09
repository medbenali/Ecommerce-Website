import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/product-category';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  categories: ProductCategory[] = [];

  constructor(private categoryService: ProductCategoryService){ }
  
  ngOnInit(): void {
    this.getAllCategories();
  }
  

  getAllCategories()
  {
    this.categoryService.getAllCategories()
    .subscribe({
      next: (data) => {
        this.categories = data;
        console.log(data);
      },
      error: (e) => {
        console.error(e);
      }

      });
  }

}
