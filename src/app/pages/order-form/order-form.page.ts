import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { OrderService } from '../../services/order.service'

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.page.html',
  styleUrls: ['./order-form.page.scss'],
})
export class OrderFormPage implements OnInit {

  orderForm: FormGroup;
  user: User = JSON.parse(localStorage.getItem('currentUser'));

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
    };
  constructor(
    public fb: FormBuilder,
    public http: HttpClient,
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      clientId: ['', [Validators.required]],
      productId: ''
    });

    if (this.user == null){
      this.router.navigate(['/login']);
    } 
  }

  createOrder() {
    console.log(this.orderForm.value)
    this.orderService.createOrder(this.orderForm.value)
      .subscribe( data => {
        this.router.navigate(['/orders']);
      },
      error => console.log('oops', error)
    );
  }

}
