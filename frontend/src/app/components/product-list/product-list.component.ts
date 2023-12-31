import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  // templateUrl: './product-list-table.component.html',
  // templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  currentCategoryId: number = 1;

  currentCategoryName: string= "";

  constructor(private productService: ProductService,
    private categoryService: ProductCategoryService,
    private route: ActivatedRoute,
    private router: Router){}

  
  ngOnInit(): void {
    
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });

  
  }
  
  getAllProducts()
  {
    const categoryId = this.route.snapshot.params['id'];

    const hasCategoryId: boolean = this.route.snapshot.params['id'];
   
    this.currentCategoryName = this.route.snapshot.params['name'];

    if(hasCategoryId)
    {
    
      console.log(`currentCategoryId=${categoryId}`);

      this.getProductsByCategoryId(categoryId);
        
    }

    else
    {
      //this.getProductsByCategoryId(this.currentCategoryId);

      this.getProducts();
    
      
    }
    
    
  }

    listProducts()
    {
      const keyWord: string = this.route.snapshot.params['keyword'];

      const searchMode: boolean = this.route.snapshot.paramMap.has('keyword');

    if(searchMode)
      {
        this.searchProductsByName(keyWord);
      }

      else 
      {
        this.getAllProducts();
      }

    }
  
  getProducts()
  {
    this.productService.getAllProducts()
    .subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }


  getProductsByCategoryId(id: number)
  {
    this.categoryService.getAllProductsByCategoryId(id)
    .subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }


  searchProductsByName(keyWord: string) 
  {
    this.productService.searchProductsByName(keyWord)
    .subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }







}
