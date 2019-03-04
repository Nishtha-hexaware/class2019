import { Component, OnInit } from '@angular/core';
import { LeaveDetails } from '../leave-details';
import {Observable} from 'rxjs';
import {LeaveDetailsService} from '../leave-details.service';
import {Router} from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css']
})
export class LeaveDetailsComponent implements OnInit {

  leavedetails : Observable<LeaveDetails>;
  empData : Observable<Employee[]>;
  empno : number;
  mgr : number;
  showButton : boolean;

  setClickRowDup(leaId, empId) { 
    this.showButton=true;
    // alert(leaId);
    alert("Employ Id  " +empId);
    localStorage.setItem("leavid",leaId);
    localStorage.setItem("lempid",empId);

  }
  doApproveDeny() {
    // alert("Redirecting...");
    this._router.navigate(["/ApproveDeny"]);

  }
  constructor(private leaveDetailsService : LeaveDetailsService, private empService : EmployeeService,
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
