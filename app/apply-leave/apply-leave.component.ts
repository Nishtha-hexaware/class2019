import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import { Router } from '@angular/router';
import { LeavePending } from '../leave-pending';
import { NgForm } from '@angular/forms';
import { LeavePendingService } from '../leave-pending.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor(public applyLeaveService:LeavePendingService, public router : Router) {
    this.empId=parseInt(localStorage.getItem("empId"));
   }
  model=new LeavePending();
  message:string;
  msg:String;
  empId : number;
  isValidFormSubmitted = false;
  calculateDays() {
    let date1: string=this.model.leaStartDate.toString();
    let date2: string=this.model.leaEndDate.toString();
    let diffInMs: number = Date.parse(date2) - Date.parse(date1);
    let diffInHours: number = diffInMs / 1000 / 60 / 60/24;
    this.model.leaNumberOfDays=diffInHours + 1;
    

}

applyLeave(form: NgForm)
{
    this.isValidFormSubmitted=false;
    if(form.invalid){

     return; 
  }  
    console.log ('end date component' + this.model.leaEndDate);
    this.applyLeaveService.applyLeave(this.empId,this.model).subscribe(
        success => {
            this.msg=success;
            console.log(success);
        },
        err => { 
            this.msg=err;
            console.log(err);
        }
    )
    this.isValidFormSubmitted = true;
    setTimeout(() => {
      this.router.navigate(['/Dashboard'])
    }
    , 3000);
}

cancel(){
  this.router.navigate(['/Dashboard'])
 }
  ngOnInit() {
  }

}