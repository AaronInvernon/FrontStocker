import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.page.html',
  styleUrls: ['./employee-form.page.scss'],
})
export class EmployeeFormPage implements OnInit {

  employeeForm: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
      department: ['', [Validators.required]]
    });
  }

  submitForm() {
    console.log(this.employeeForm.value)
  }

}
