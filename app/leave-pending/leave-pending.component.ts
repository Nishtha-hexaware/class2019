import { Component, OnInit } from '@angular/core';
import { LeavePending } from '../leave-pending';
import {Observable} from 'rxjs';
import {LeavePendingService} from '../leave-pending.service';
import {Router} from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-leave-pending',
  templateUrl: './leave-pending.component.html',
  styleUrls: ['./leave-pending.component.css']
})
export class LeavePendingComponent implements OnInit {

  leavedetails : Observable<LeavePending>;
  empData : Observable<Employee[]>;
  empno : number;
  mgr : number;
  showButton : boolean;
  order: string = 'leaStartDate';
  reverse: boolean = true;

  sempno : string = 'empId';
  rev : boolean = false;

  setClickRowDup(leaId, empId) { 
    this.showButton=true;
    // alert(leaId);
    // alert("Employ Id  " +empId);
    localStorage.setItem("leavid",leaId);
    localStorage.setItem("lempid",empId);

  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  doApproveDeny() {
    // alert("Redirecting...");
    this._router.navigate(["/ApproveDeny"]);

  }
  constructor(private leaveDetailsService : LeavePendingService, private empService : EmployeeService,
       private _router : Router) { 
         this.showButton=false;
    this.empno=parseInt(localStorage.getItem("empId"));
    this.leavedetails = leaveDetailsService .searchLeave(this.empno);
    this.mgr=parseInt(localStorage.getItem("empMgrId")); 
    this.empData = empService.getEmployee();
    }
  ngOnInit() {
  }

  
}
