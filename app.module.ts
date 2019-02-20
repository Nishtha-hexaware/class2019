import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from'@angular/http';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import{RouterModule,Routes} from '@angular/router';
import{FormsModule} from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';

import { EmployComponent } from './employ/employ.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerComponent } from './manager/manager.component';
const data:Routes= [
  {path:'',component:EmployeeComponent},
{path:'Login',component:LoginComponent},
{path:'Dashboard',component:DashboardComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    UserComponent,
    LoginComponent,
    EmployeeComponent,

    EmployComponent,
    DashboardComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,RouterModule.forRoot(data)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
