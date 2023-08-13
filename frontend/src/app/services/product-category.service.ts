import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../models/product-category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private baseUrl = "http://localhost:8080/api/product-category";

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<ProductCategory[]>
  {
    return this.http.get<ProductCategory[]>(this.baseUrl);
  }

  getAllProductsByCategoryId(id: number): Observable<Product[]>
  {
    const productUrl = `${this.baseUrl}/${id}/products`;

    return this.http.get<Product[]>(productUrl);
  }




}
