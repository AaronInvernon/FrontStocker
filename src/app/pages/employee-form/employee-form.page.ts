import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.page.html',
  styleUrls: ['./employee-form.page.scss'],
})
export class EmployeeFormPage implements OnInit {

  employeeForm: FormGroup;
  user: User;

  constructor(
    public fb: FormBuilder,
    private router:Router
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
    } /*else {
      this.clientService.getClients().subscribe((clients) => {
        this.clients = clients;
      });
    }*/
  }

  submitForm() {
    console.log(this.employeeForm.value)
  }

}
