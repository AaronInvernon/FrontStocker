import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.page.html',
  styleUrls: ['./order-form.page.scss'],
})
export class OrderFormPage implements OnInit {

  orderForm: FormGroup;
  user: User;
  constructor(
    public fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      clientId: ['', [Validators.required]],
      productId: ''
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
    console.log(this.orderForm.value)
  }

}
