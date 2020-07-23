import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { ClientServiceService } from '../../services/client-service.service'

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.page.html',
  styleUrls: ['./client-form.page.scss'],
})
export class ClientFormPage implements OnInit {

  clientForm: FormGroup;
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
    private clientService: ClientServiceService
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
    }
  }

  createClient(): void {
    console.log(this.clientForm.value)
    this.clientService.createClient(this.clientForm.value)
      .subscribe( data => {
        this.router.navigate(['/clients']);
      },
      error => console.log('oops', error)
    );
  }

}
