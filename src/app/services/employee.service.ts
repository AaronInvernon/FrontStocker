import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Employee } from '../models/employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  allEmployeesUrl: string = 'https://localhost:8080/employees';

  user: User = JSON.parse(localStorage.getItem('currentUser'));

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    this.loadHttp();
    return this.http.get<Employee[]>(this.allEmployeesUrl, this.httpOptions);
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
