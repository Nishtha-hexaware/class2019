import { Component, OnInit } from '@angular/core';
import { Leavehistory } from '../leavehistory';
import { Observable } from 'rxjs';
import { LeavehistoryService } from '../leavehistory.service';
import { LeaveDetailsService } from '../leave-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {

  leavehistory : Observable<Leavehistory[]>;
  applyLeave() {
    this._router.navigate(["/applyLeave"]);
  }
empno : number;
  constructor(private leavehistoryService : LeaveDetailsService, private _router : Router) { 
    this.empno=parseInt(localStorage.getItem("empId"));
    this.leavehistory = leavehistoryService.searchLeaveHistory(this.empno);
  }

  ngOnInit() {
  }

}
