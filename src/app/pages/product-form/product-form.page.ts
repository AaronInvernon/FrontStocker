import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
})
export class ProductFormPage implements OnInit {

  productForm: FormGroup;
  user: User;

  constructor(
    private router:Router,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      maker: ['', [Validators.required]],
      price: ['', [Validators.required]]
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
    console.log(this.productForm.value)
  }

}
