import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { BillService } from '../../services/bill.service';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.page.html',
  styleUrls: ['./bill-form.page.scss'],
})
export class BillFormPage implements OnInit {

  billForm: FormGroup;
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
    private billService: BillService
  ) { }

  ngOnInit() {
    this.billForm = this.fb.group({
      clientId: ['', [Validators.required]],
      orderId: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });

    if (this.user == null){
      this.router.navigate(['/login']);
    }
  }

  createBill(): void {
    console.log(this.billForm.value)
    this.billService.createBill(this.billForm.value)
      .subscribe( data => {
        this.router.navigate(['/bills']);
      },
      error => console.log('oops', error)
    );
  }

}
