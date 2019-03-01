import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Employee } from'../employee';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee : Observable<Employee[]>;
  constructor(private employeeService : EmployeeService, private _router : Router) { 
    this.employee = employeeService .getEmployee();
  }
  login(empId,empMgrId){
    localStorage.setItem("empId",empId);
    localStorage.setItem("empMgrId",empMgrId);
    this._router.navigate(["/Login"]);
  }
  ngOnInit() {
  }
}
