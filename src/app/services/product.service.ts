import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  allProductsUrl: string = 'https://localhost:8080/products';

  user: User = JSON.parse(localStorage.getItem('currentUser'));

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    this.loadHttp();
    return this.http.get<Product[]>(this.allProductsUrl, this.httpOptions);
  }

  createProduct(product: any): Observable<any>{
    this.loadHttp();

    return this.http
    .post<Product>(this.allProductsUrl, product);
  }

  loadHttp() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if (this.user != null){
      console.log(this.user);
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'Basic ' + btoa( this.user.username + ':' + this.user.password)
        })
        };
    }
  }
}
