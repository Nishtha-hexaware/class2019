import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Employee } from'../employee';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
employ:Observable<Employee>;
empno:number;
mg:number;
  constructor(private employeeService:EmployeeService) { 
this.empno=parseInt(localStorage.getItem("empMgrId"));
this.employ=employeeService.searchEmployee(this.empno);
  }

  ngOnInit() {
  }

}
