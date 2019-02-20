import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import { Employee } from'./employee';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : Http) {
  }
    getEmployee() : Observable<Employee[]>
    {
return this.http.get
("http://localhost:8080/FTP113-0.0.1-SNAPSHOT/api/employees")
.map ((res:Response) => res.json())
    }
}
