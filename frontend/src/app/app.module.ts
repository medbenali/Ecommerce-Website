import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrontendLayoutComponent } from './frontend/components/frontend-layout/frontend-layout.component';
import { BackendLayoutComponent } from './backend/components/backend-layout/backend-layout.component';
import { MenuComponent } from './backend/components/menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FrontendLayoutComponent,
    BackendLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
