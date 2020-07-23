import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
})
export class ProductFormPage implements OnInit {

  productForm: FormGroup;
  user: User = JSON.parse(localStorage.getItem('currentUser'));

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
    };
  constructor(
    private router:Router,
    private http: HttpClient,
    private fb: FormBuilder,
    private productService: ProductService
    ) { }

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
    }
  }

  createOrder(): void {
    console.log(this.productForm.value)
    this.productService.createProduct(this.productForm.value)
      .subscribe( data => {
        this.router.navigate(['/products']);
      },
      error => console.log('oops', error)
    );
  }

}
