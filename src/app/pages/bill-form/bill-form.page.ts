import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.page.html',
  styleUrls: ['./bill-form.page.scss'],
})
export class BillFormPage implements OnInit {

  billForm: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.billForm = this.fb.group({
      clientId: ['', [Validators.required]],
      orderId: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  submitForm() {
    console.log(this.billForm.value)
  }

}
