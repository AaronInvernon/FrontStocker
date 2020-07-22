import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { Client } from '../../models/clients.model';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  
  clients: Client[];
  user: User;

  constructor(
    private router: Router,
    private clientService: ClientServiceService
  ) { }

  ngOnInit() {

    if (this.user == null){
      this.router.navigate(['/login']);
    } else {
      this.clientService.getClients().subscribe((clients) => {
        this.clients = clients;
      });
    }
    
  }

}
