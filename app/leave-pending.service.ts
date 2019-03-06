import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import { LeavePending } from'./leave-pending';

import 'rxjs/add/operator/map';

@Injectable()
export class LeavePendingService {

  constructor(private http : Http) {
  }

  applyLeave(empId:number,leavedetails:LeavePending):Observable<String> {
     
    return this.http.post('http://localhost:8080/FTP113-0.0.1-SNAPSHOT/api/leaveDetails/applyleave/'+ empId,leavedetails)
    .map(response=>response.text())
}

  approveDeny(empId:number,status:string,leavedetails:LeavePending):Observable<String> {
     
    return this.http.post('http://localhost:8080/FTP113-0.0.1-SNAPSHOT/api/leaveDetails/approveDeny/'+ empId +"/"+status,leavedetails)
    .map(response=>response.text())
}

  searchById(leavid : number) : Observable<LeavePending>{
    return this.http.get
    ("http://localhost:8080/FTP113-0.0.1-SNAPSHOT/api/leaveDetails/"+leavid)
    .map((res:Response) => res.json())
       }
  
  searchLeaveHistory(EmpId:number): Observable<LeavePending[]>{
    return this.http.get
 ("http://localhost:8080/FTP113-0.0.1-SNAPSHOT/api/leaveDetails/leaveHistory/"+EmpId)
 .map((res:Response) => res.json())
    }
  searchLeave(EmpId:number): Observable<LeavePending>{
    return this.http.get
 ("http://localhost:8080/FTP113-0.0.1-SNAPSHOT/api/leaveDetails/listPending/"+EmpId)
 .map((res:Response) => res.json())
    }
//     getEmployee() : Observable<Employee[]>
//     {
// return this.http.get
// ("http://localhost:8080/FTP113/api/employees")
// .map ((res:Response) => res.json())
//     }
}



