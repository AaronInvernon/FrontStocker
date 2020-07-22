import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  user: User;
  orders: Order[];

  constructor(
    private router:Router,
    private orderService: OrderService
  ) { }

  ngOnInit() {

    if (this.user == null){
      this.router.navigate(['/login']);
    } else {
      this.orderService.getOrders().subscribe((orders) => {
        this.orders = orders;
      });
    }
  }

}
