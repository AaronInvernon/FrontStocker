import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.page.html',
  styleUrls: ['./order-form.page.scss'],
})
export class OrderFormPage implements OnInit {

  orderForm: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      clientId: ['', [Validators.required]],
      productId: ''
    });
  }

  submitForm() {
    console.log(this.orderForm.value)
  }

}
