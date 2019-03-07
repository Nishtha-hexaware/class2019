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

  demo : boolean = false;
  leaIdlist = [];
  empList = [];
  obj : LeavePending;
  mgrid : number;
  status : string;
  message : String;
 

  approveAll() {
    this.status="YES";
    this.mgrid = parseInt(localStorage.getItem("empId"));
    this.obj = new LeavePending();
    let str = this.empList.toString();
    let res = str.split(',');
    for(var v in res) {
      
      this.obj.leaId=parseInt(res[v]);
      this.obj.leaManagerComment = "Enjoy";
      this.leaveDetailsService.approveDeny(this.mgrid,this.status,this.obj).subscribe(
        dd => {this.message=dd;
        },
        errorMsg => {
          this.message=errorMsg;
          console.log(errorMsg)
        }
      )
      setTimeout(()=> {
        this._router.navigate(['/Dashboard'])
      },2000);
    }
  }

  checkbox(leaId, mgrid) {
   
    var res1 = leaId + " ";
    this.empList.push(res1);
   
  }

  setClickRowDup(leaId, empId) { 
    this.showButton=true;
    
    
    localStorage.setItem("leavid",leaId);
    localStorage.setItem("lempid",empId);

  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  tat(stdate) : number {
    let today = new Date();
    let diffInMs: number = Date.parse(stdate) - Date.parse(today.toDateString());
    let diffInHours: number = Math.floor(diffInMs / 1000 / 60 / 60 / 24);

    return diffInHours;
  }

  doApproveDeny() {
  
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
