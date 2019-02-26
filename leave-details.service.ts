import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import { LeaveDetails } from'./leave-details';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LeaveDetailsService {

  constructor(private http : Http) {
  }

  applyLeave(empId:number,leavedetails:LeaveDetails):Observable<String> {
     
    return this.http.post('http://localhost:8080/FTP113/api/leaveDetails/applyleave/'+ empId,leavedetails)
    .map(response=>response.text())
}

  approveDeny(empId:number,status:string,leavedetails:LeaveDetails):Observable<String> {
     
    return this.http.post('http://localhost:8080/FTP113/api/leaveDetails/approveDeny/'+ empId +"/"+status,leavedetails)
    .map(response=>response.text())
}

  searchById(leavid : number) : Observable<LeaveDetails>{
    return this.http.get
    ("http://localhost:8080/FTP113/api/leaveDetails/"+leavid)
    .map((res:Response) => res.json())
       }
  
  searchLeaveHistory(EmpId:number): Observable<LeaveDetails[]>{
    return this.http.get
 ("http://localhost:8080/FTP113/api/leaveDetails/leaveHistory/"+EmpId)
 .map((res:Response) => res.json())
    }
  searchLeave(EmpId:number): Observable<LeaveDetails>{
    return this.http.get
 ("http://localhost:8080/FTP113/api/leaveDetails/listPending/"+EmpId)
 .map((res:Response) => res.json())
    }
//     getEmployee() : Observable<Employee[]>
//     {
// return this.http.get
// ("http://localhost:8080/FTP113/api/employees")
// .map ((res:Response) => res.json())
//     }
}
