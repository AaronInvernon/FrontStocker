import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Client } from '../models/clients.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  allClientsUrl: string = 'https://localhost:8080/clients';

  user: User = JSON.parse(localStorage.getItem('currentUser'));

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]>{
    this.loadHttp();
    return this.http.get<Client[]>(this.allClientsUrl, this.httpOptions);
  }

  createClient(client: any): Observable<any>{
    this.loadHttp();

    return this.http
    .post<Client>(this.allClientsUrl, client);
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
