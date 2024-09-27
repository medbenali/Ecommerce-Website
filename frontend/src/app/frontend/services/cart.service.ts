import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(cartItem: CartItem)
  {
    // check if we already have the item in our cart

    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = new CartItem("","","",0,"");

    if(this.cartItems.length > 0)
    {
      
      // find the item in the cart based on item id

      for(let tempCartItem of this.cartItems)
      {
        if(tempCartItem.id == cartItem.id)
        {
          existingCartItem = tempCartItem;
          alreadyExistsInCart = true;
          break;
        }
      }
    }

      if(alreadyExistsInCart)
      {
        // increment the quantity
         existingCartItem.quantity++;
      }

      else
      {
        this.cartItems.push(cartItem);
      }

      this.computeCartTotals();
    
  }

  computeCartTotals()
  {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItems)
    {
      totalPriceValue += currentCartItem.unitPrice * currentCartItem.quantity;
      totalQuantityValue += currentCartItem.quantity;
    }

    // publish the new values ... all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log cart data just for debugging purposes
    this.logCartData(totalPriceValue, totalQuantityValue);


  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) 
  {
    console.log('Contents of the cart');
    for(let cartItem of this.cartItems)
    {
      const subTotalPrice = cartItem.quantity * cartItem.unitPrice;
      console.log(`name: ${cartItem.name}, quantity=${cartItem.quantity}, unitPrice=${cartItem.unitPrice}, subTotalPrice=${subTotalPrice}`); 
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    console.log('----');
  }


}
