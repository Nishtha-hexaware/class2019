import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Employee } from'../employee';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee : Observable<Employee[]>;
  constructor(private employeeService : EmployeeService) { 
    this.employee = employeeService .getEmployee();
  }


  ngOnInit() {
  }

}
