import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { Client } from '../../models/clients.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.page.html',
  styleUrls: ['./client-form.page.scss'],
})
export class ClientFormPage implements OnInit {

  clientForm: FormGroup;
  user: User;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json', Authorization: 'Basic ' + btoa( 'admin' + ':' + '1234')
    })
    };
  constructor(
    public fb: FormBuilder,
    public http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
      street: ['', [Validators.required]]
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

  createClient() {
    console.log(this.clientForm.value)
    const client = new Client();
    client.name = this.clientForm.value.name;
    client.phoneNumber = this.clientForm.value.phoneNumber;
    client.country = this.clientForm.value.country;
    client.city = this.clientForm.value.city;
    client.postCode = this.clientForm.value.postCode;
    client.street = this.clientForm.value.street;
    this.http.post('http://localhost:8080/clients', client,this.httpOptions)
  }

}
