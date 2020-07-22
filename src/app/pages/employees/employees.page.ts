import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  user: User;
  employees: Employee[];

  constructor(
    private router:Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {

    if (this.user == null){
      this.router.navigate(['/login']);
    } else {
      this.employeeService.getEmployees().subscribe((employees) => {
        this.employees = employees;
      });
    }
  }

}
