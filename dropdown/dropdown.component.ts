import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
emp : Observable<Employee[]>
  constructor(private employeeService : EmployeeService, private _router : Router) {
    this.emp = employeeService.getEmployee();
   }

  ngOnInit() {
  }

}
