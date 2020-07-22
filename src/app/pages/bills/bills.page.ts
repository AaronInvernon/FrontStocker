import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { Bill } from '../../models/bill.model';
import { BillService } from '../../services/bill.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.page.html',
  styleUrls: ['./bills.page.scss'],
})
export class BillsPage implements OnInit {

  bills: Bill[];
  user: User;
  constructor(
    private router: Router,
    private billService : BillService
    ) { }

  ngOnInit() {

    if (this.user == null){
      this.router.navigate(['/login']);
    } else {
      this.billService.getBills().subscribe((bills) => {
        console.log(bills);
        this.bills = bills;
      });
    }
  }

}
