import { Component, OnInit } from '@angular/core';
import { LeaveDetailsService } from '../leave-details.service';
import { LeaveDetails } from '../leave-details';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-approve-deny',
  templateUrl: './approve-deny.component.html',
  styleUrls: ['./approve-deny.component.css']
})
export class ApproveDenyComponent implements OnInit {

  leaveDetails : Observable<LeaveDetails>;
  empDetails : Observable<Employee>;
  leavId : number;
  lempId : number;
  status : string;
  obj : LeaveDetails;
  msg : String;
  constructor(private leaveService : LeaveDetailsService, private empService : EmployeeService, 
    private _router : Router) { 
    this.leavId=parseInt(localStorage.getItem("leavid"));
    this.lempId=parseInt(localStorage.getItem("empId"));
    this.empDetails=this.empService.searchEmployee(this.lempId);
    alert(this.leavId);
    this.leaveDetails=leaveService.searchById(this.leavId);
    this.obj=new LeaveDetails();
  }

  approve() {
    this.obj.leaId=this.leavId;
    this.status="YES";

    this.leaveService.approveDeny(this.lempId,this.status,this.obj).subscribe(
      dd => {
          this.msg=dd;
      },
      errorMsg => { 
          this.msg=errorMsg;
          console.log(errorMsg);
      }
  )
    }

    deny() {
    this.obj.leaId=this.leavId;
    this.status="NO";

    this.leaveService.approveDeny(this.lempId,this.status,this.obj).subscribe(
      dd => {
          this.msg=dd;
      },
      errorMsg => { 
          this.msg=errorMsg;
          console.log(errorMsg);
      }
  )
 
//  this.isValidFormSubmitted = true;
    
  }


  cancel() {
    this._router.navigate(["/Dashboard"]);
  }

  ngOnInit() {
  }

}
