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

  ngOnInit():void {

    this.user = JSON.parse(localStorage.getItem('currentUser'));

    if (this.user != null) {
      this.router.navigate(['/']);
    } else {
      this.loginForm = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });
    }
  }

  login(): void{
    console.log('iniciamos login');
    console.log(this.loginForm.value.username + "  " + this.loginForm.value.password)

    this.http
      .post<string>('http://localhost:8080/login', this.loginForm.value)
      .subscribe(
        data => {
          this.user = new User();
          this.user.username = this.loginForm.value.username;
          this.user.password = this.loginForm.value.password;
          this.user.role = data;
          localStorage.setItem('currentUser', JSON.stringify(this.user));
          this.router.navigate(['/clients']);
        }
      )
  }

}
