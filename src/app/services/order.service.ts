import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Order } from '../models/order.model'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  allOrdersUrl: string = 'https://localhost:8080/orderss';

  user: User = JSON.parse(localStorage.getItem('currentUser'));

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]>{
    this.loadHttp();
    return this.http.get<Order[]>(this.allOrdersUrl, this.httpOptions);
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
