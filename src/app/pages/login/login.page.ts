import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  user: User;

  constructor(
    public fb: FormBuilder,
    public http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('currentUser'));

    if (this.user != null) {
      this.router.navigate(['/']);
    } else {
      this.loginForm = this.fb.group({
        clientId: ['', [Validators.required]],
        orderId: ['', [Validators.required]],
        price: ['', [Validators.required]]
      });
    }
  }

  login(): void{
    console.log('iniciamos login');

    this.http
      .post<string>('https://localhost:8080/login', this.loginForm.value)
      .subscribe(
        data => {
          this.user = new User();
          this.user.username = this.loginForm.value.username;
          this.user.password = this.loginForm.value.password;
          this.user.role = data;

          localStorage.setItem('currentUser', JSON.stringify(this.user));
          this.router.navigate(['/']);
        }
      )
  }

}
