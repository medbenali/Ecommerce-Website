import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products";
  

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

  /*


    return this.http.get<any>(productUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        // Log the entire error object for detailed information
        console.error('Error fetching data:', error);

        // Optional: Log specific properties
        console.error('Error Status:', error.status); // HTTP status code
        console.error('Error Message:', error.message); // Error message
        console.error('Error Body:', error.error); // Response body if available

        // Return an observable with a user-facing error message
        return throwError('Something went wrong; please try again later.');
      })
    );


  */



  getProductById(id: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/${id}`;

    return this.http.get<Product>(productUrl);
  }



  searchProductsByName(name: string): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}?name=${name}`;

    return this.http.get<Product[]>(searchUrl);

  }

  searchProductsPaginate(thePage: number,
    thePageSize: number,
    keyword: string): Observable<any> {

    const searchUrl = `${this.baseUrl}?name=${keyword}&page=${thePage}&size=${thePageSize}`;

    return this.http.get<any>(searchUrl);

  }





}
