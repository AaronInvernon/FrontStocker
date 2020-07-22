import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Client } from '../models/clients.model';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  allLeadsUrl: string = 'https://localhost:8080/clients';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getLeads(): Observable<Client[]>{
    return this.http.get<Client[]>(this.allLeadsUrl, this.httpOptions);
  }
}
