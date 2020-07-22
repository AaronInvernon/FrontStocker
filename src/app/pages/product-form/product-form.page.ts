import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
})
export class ProductFormPage implements OnInit {

  productForm: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      maker: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  submitForm() {
    console.log(this.productForm.value)
  }

}
