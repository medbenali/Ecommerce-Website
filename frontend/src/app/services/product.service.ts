import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products"

  constructor(private http: HttpClient) { }


  /*
  getAllProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseUrl);
  }
  */
 

  getProductListPaginate(thePage: number,
                         thePageSize: number): Observable<any> {

    const productUrl = `${this.baseUrl}/?page=${thePage}&size=${thePageSize}`;

    return this.http.get<any>(productUrl);

  }



  getProductById(id: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/${id}`;

    return this.http.get<Product>(productUrl);
  }



  searchProductsByName(name: string): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}?name=${name}`;

    return this.http.get<Product[]>(searchUrl);

  }





}
