import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientFormPage } from '../client-form/client-form.page';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }
  navigate(){
    this.router.navigate(['/add'])
  }

}
