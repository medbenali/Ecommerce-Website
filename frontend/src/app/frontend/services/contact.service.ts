import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = "http://localhost:8080/api/contact";

  constructor(private http:HttpClient) { }

  addContact(data: any): Observable<any>
  {
    return this.http.post(this.baseUrl, data);
  }

  
}
