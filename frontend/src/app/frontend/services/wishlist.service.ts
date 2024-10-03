import { Injectable } from '@angular/core';
import { Product } from '../models/product';


const WISHLIST_KEY = 'wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  //wishlist: any = {}



 
  constructor() { }

  public saveProduct(wishlist: Product[])
  {
    window.sessionStorage.removeItem(WISHLIST_KEY);
    window.sessionStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }

  public getWishlist()
  {
    const wishlist = window.sessionStorage.getItem(WISHLIST_KEY);

    if(wishlist)
    {
      return JSON.parse(wishlist);
    }

    else
    {
      return {};
    }
  }


  clean(): void
  {
    window.sessionStorage.clear();
  }
  

  public isWishlisted(product: Product)//: boolean
  
  {

    /*
    
    
    const wishlists = window.sessionStorage.getItem(WISHLIST_KEY);


    if(wishlists)
    {

      for(this.wishlist of JSON.parse(wishlists))
      {
      

      //console.log('wishlist ' + this.wishlist);

      
      if(this.wishlist.id == product.id)
      {
        console.log('product ' + product.name + ' exists in the wishlist');

        return true;
      }

      }

    
   
  }

  return false;

  */
}

  /*

      for(let wish of this.wishlist)
      {
      

      if(this.wish.id == product.id)
      {
        console.log('product ' + product.name + ' exists in the wishlist');

        return true;
      }

      */

      /*
      else
      {
        console.log('product ' + product.name + ' not exists in the wishlist');

        return false;
      }

      */
  

    

 

  



}
