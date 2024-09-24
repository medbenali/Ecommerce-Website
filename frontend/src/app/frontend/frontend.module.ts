import { NgModule, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule implements OnInit { 



  constructor() {

    //this.setBaseHref('/');

    /*
    this.loadBackendStylesAndScripts();
    this.loadScripts([
      'src/assets/frontend/js/vendor.js',
      'src/assets/frontend/js/jquery.shopnav.js',
      'src/assets/frontend/js/app.js'
    ]);
    */

  
  }

  ngOnInit() {
    //this.addBaseHrefTag();
  }

  addBaseHrefTag() {

    
    const head = document.getElementsByTagName('head')[0];

    const baseElement = document.createElement('base'); 
 

    baseElement.setAttribute('href', '/');

    head.appendChild(baseElement);


  }



  // Method to load styles and scripts dynamically
  loadBackendStylesAndScripts() {
    const head = document.getElementsByTagName('head')[0];

    // Load CSS files
    const styles = [
      'src/assets/frontend/css/vendor.css',
      'src/assets/frontend/css/utility.css',
      'src/assets/frontend/css/app.css'

    ];

    styles.forEach(href => {
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = href;
      head.appendChild(linkElement);
    });


  }

  loadScripts(scripts: string[]) {
    scripts.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true; // Ensure asynchronous loading of scripts
      document.body.appendChild(script);
    });
  }

  setBaseHref(href: string): void {
   

    const baseElement = document.createElement('base');

    baseElement.href="/";

    document.appendChild(baseElement);
  
  
      
    }

   
  }





