import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/frontend/models/cart-item';
import { Product } from 'src/app/frontend/models/product';
import { ProductCategoryService } from '../../services/product-category.service';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { WishlistService } from '../../services/wishlist.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  currentCategoryId: number = 1;

  currentCategoryName: string = "";

  previousCategoryId: number = 1;

  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  previousKeyword: string = "";

  keyWord: string="";

  keyWordCount: number = 0;

  wishlist: Product[] = [];



  
  constructor(private productService: ProductService,
    private categoryService: ProductCategoryService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {

    
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });


  }

  getAllProducts() {
    const categoryId = this.route.snapshot.params['id'];

    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.params['id'];

    this.currentCategoryName = this.route.snapshot.params['name'];

    if (hasCategoryId) {

      this.currentCategoryId = categoryId;

      

      if(this.previousCategoryId != this.currentCategoryId)
      {
      
        this.thePageNumber = 1;
      }

      this.previousCategoryId = this.currentCategoryId;
      

      console.log(`currentCategoryId=${this.currentCategoryId}`);

      this.getProductsByCategoryId(this.currentCategoryId);

    }

    

    else {
      //this.getProductsByCategoryId(this.currentCategoryId);

      this.getProducts();


    }


  }

  

  listProducts() {
    this.keyWord= this.route.snapshot.params['keyword'];

    const searchMode: boolean = this.route.snapshot.paramMap.has('keyword');

    if (searchMode) {

      if(this.previousKeyword != this.keyWord)
      {
        this.thePageNumber = 1;
      }

      this.previousKeyword = this.keyWord;




      console.log(`keyword=${this.keyWord}, thePageNumber=${this.thePageNumber}`);

      //this.searchProductsByName(keyWord);

      this.searchProductsPaginate(this.keyWord);

      this.countKeyWordOccurrences();
      


    }

    else {
      this.getAllProducts();
    }

  }

  countKeyWordOccurrences() {
    const regex = new RegExp(this.keyWord, 'gi'); // Create a case-insensitive search
    this.keyWordCount = (this.keyWord.match(regex) || []).length;
  }



  getProducts() {
    ///this.productService.getProductListPaginate(this.thePageNumber - 1, this.thePageSize)
    this.productService.getProductListPaginate(0, 4)
    .subscribe({
      next: (this.processResult())
    });
    
    /*
    .subscribe({
        next: (data) => {
          this.products = data.products;
          this.thePageNumber = data.number + 1;
          this.thePageSize = data.size;
          this.theTotalElements = data.totalElements;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
      */
 
  }


  /*  
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
  */


  /*
  getProductsByCategoryId(id: number) {
    this.categoryService.getAllProductsByCategoryId(id)
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  */

  getProductsByCategoryId(categoryId: number) {
    this.categoryService.getProductCategoryListPaginate(this.thePageNumber - 1, this.thePageSize,categoryId)
    .subscribe({
      next: (this.processResult())
    });

    /*
    .subscribe({
      next: (data) => {
        this.products = data.products;
        this.thePageNumber = data.number + 1;
        this.thePageSize = data.size;
        this.theTotalElements = data.totalElements;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
    */
   
  }


  /*
  searchProductsByName(keyWord: string) {
    this.productService.searchProductsByName(keyWord)
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  */


  searchProductsPaginate(keyWord: string)
  {
    /*
    this.productService.searchProductsPaginate(this.thePageNumber - 1,this.thePageSize,keyWord)
    .subscribe({
      next: (data) => {
        this.products = data.products;
        this.thePageNumber = data.number + 1;
        this.thePageSize = data.size;
        this.theTotalElements = data.totalElements;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
    */

    this.productService.searchProductsPaginate(this.thePageNumber - 1,this.thePageSize,keyWord)
    .subscribe({
      next: (this.processResult())
    });
    
    // works also
    //.subscribe(this.processResult())

   
  }


  updatePageSize(pageSize: string)
  {
    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

  processResult()
  {
    return (data: any) => {
      this.products = data.products;
      this.thePageNumber = data.number + 1;
      this.thePageSize = data.size;
      this.theTotalElements = data.totalElements;
      console.log(data);
    };
  }

  addToCart(product: Product)
  {
    console.log(`Adding to cart: ${product.name}, ${product.unitPrice}`);

    const cartItem = new CartItem(product.id, product.name, product.imageUrl, product.unitPrice,product.category.categoryName);

    this.cartService.addToCart(cartItem); 
  }

  addToWishlist(product: Product)
  {
    console.log(`Adding to wishlist: ${product.name}, ${product.unitPrice}`);

    this.wishlist.push(product);

    this.wishlistService.saveProduct(this.wishlist);
  }

  isWishlisted(product: Product)
  {
    //return this.wishlistService.isWishlisted(product);
  }
  

   

}
