import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { FrontendLayoutComponent } from './frontend/components/frontend-layout/frontend-layout.component';
import { BackendLayoutComponent } from './backend/components/backend-layout/backend-layout.component';
import { MenuComponent } from './backend/components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './frontend/components/search/search.component';
import { CartStatusComponent } from './frontend/components/cart-status/cart-status.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchComponent,
    CartStatusComponent,
    FrontendLayoutComponent,
    BackendLayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent,SearchComponent,CartStatusComponent]

})
export class AppModule { }
