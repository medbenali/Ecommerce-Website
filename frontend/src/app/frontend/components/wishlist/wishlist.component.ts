import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlists: any = {};

  constructor(private wishlistService: WishlistService,
              private cartService: CartService){}

  ngOnInit(): void {

    this.wishlists = this.wishlistService.getWishlist();


  
  }

  addToCart(product: Product)
  {
    console.log(`Adding to cart: ${product.name}, ${product.unitPrice}`);

    const cartItem = new CartItem(product.id, product.name, product.imageUrl, product.unitPrice,product.category.categoryName);

    this.cartService.addToCart(cartItem); 
  }




}
