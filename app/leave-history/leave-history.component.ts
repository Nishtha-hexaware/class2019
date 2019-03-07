import { Component, OnInit } from '@angular/core';
import { Leavehistory } from '../leavehistory';
import { Observable } from 'rxjs';
import { LeavehistoryService } from '../leavehistory.service';
import { LeavePendingService } from '../leave-pending.service';
import { Router } from '@angular/router';
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { LeavePending } from "../leave-pending";

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {

  leavehistory : Observable<Leavehistory[]>;
    leavePending : Observable<LeavePending[]>;
  applyLeave() {
    
    this._router.navigate(["/ApplyLeave"]);
  }
page: number =1;
totalRec : number;
empData : Observable<Employee[]>;
empno : number;
  constructor(private leavehistoryService : LeavePendingService,
    private _router : Router) { 
    this.empno=parseInt(localStorage.getItem("empId"));
    this.leavehistory = leavehistoryService.searchLeaveHistory(this.empno);
  }

  ngOnInit() {
  }

}
