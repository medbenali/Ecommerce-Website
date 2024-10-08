import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/frontend/models/cart-item';
import { CartService } from 'src/app/frontend/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit{


  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService){}

  ngOnInit(): void {

    this.listCartDetails();
 
  }

  listCartDetails()
  {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice
    .subscribe({ 
      next: (data) => {
        this.totalPrice = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });

    this.cartService.totalQuantity
    .subscribe({ 
      next: (data) => {
        this.totalQuantity = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });


    this.cartService.computeCartTotals();

  }

}
