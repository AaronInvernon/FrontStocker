import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.page.html',
  styleUrls: ['./client-form.page.scss'],
})
export class ClientFormPage implements OnInit {

  clientForm: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
      street: ['', [Validators.required]]
    });
  }

  submitForm() {
    console.log(this.clientForm.value)
  }

}
