import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/frontend/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.updateCartStatus();
  }


  updateCartStatus()
  {
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
  }




}
