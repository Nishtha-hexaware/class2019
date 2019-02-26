import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import { Router } from '@angular/router';
import { LeaveDetails } from '../leave-details';
import { NgForm } from '@angular/forms';
import { LeaveDetailsService } from '../leave-details.service';
@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {


  constructor(public applyLeaveService:LeaveDetailsService, public router : Router) {
    this.empId=parseInt(localStorage.getItem("empId"));
    alert("Employ ID " +this.empId);
   }
  model=new LeaveDetails();
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
    
   // alert(diffInHours);
    //console.log(diffInHours);

    //alert("Event Fired");
}

applyLeave(form: NgForm)
{
    this.isValidFormSubmitted=false;
    if(form.invalid){
   //     alert("Invalid");
     return; 
  }  
    console.log ('end date component' + this.model.leaEndDate);
    this.applyLeaveService.applyLeave(this.empId,this.model).subscribe(
        success => {
            this.msg=success;
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
    , 10000);
}

  ngOnInit() {
  }

}
