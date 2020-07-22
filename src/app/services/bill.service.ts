import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Bill } from '../models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  allBillsUrl: string = 'https://localhost:8080/bills';

  user: User = JSON.parse(localStorage.getItem('currentUser'));

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getBills(): Observable<Bill[]>{
    this.loadHttp();
    return this.http.get<Bill[]>(this.allBillsUrl, this.httpOptions);
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
