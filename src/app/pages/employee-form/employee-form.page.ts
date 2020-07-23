import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { EmployeeService } from '../../services/employee.service'


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.page.html',
  styleUrls: ['./employee-form.page.scss'],
})
export class EmployeeFormPage implements OnInit {

  employeeForm: FormGroup;
  clientForm: FormGroup;
  user: User = JSON.parse(localStorage.getItem('currentUser'));

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
    };

  constructor(
    public fb: FormBuilder,
    private router:Router,
    public http: HttpClient,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
      department: ['', [Validators.required]]
    });

    if (this.user == null){
      this.router.navigate(['/login']);
    }
  }

  createEmployee(): void {
    console.log(this.employeeForm.value)
    this.employeeService.createEmployee(this.employeeForm.value)
      .subscribe( data => {
        this.router.navigate(['/employees']);
      },
      error => console.log('oops', error)
    );
  }

}
