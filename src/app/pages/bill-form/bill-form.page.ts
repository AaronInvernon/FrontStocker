import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.page.html',
  styleUrls: ['./bill-form.page.scss'],
})
export class BillFormPage implements OnInit {

  billForm: FormGroup;
  user: User;
  constructor(
    public fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.billForm = this.fb.group({
      clientId: ['', [Validators.required]],
      orderId: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });

    if (this.user == null){
      this.router.navigate(['/login']);
    }/* else {
      this.leadService.getLeads().subscribe((leads) => {
        console.log(leads);
        this.leads = leads;
      });
    }*/
  }

  submitForm() {
    console.log(this.billForm.value)
  }

}
