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
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { ApproveDenyComponent } from './approve-deny/approve-deny.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { DropdownComponent } from './dropdown/dropdown.component';
const data:Routes= [
  {path:'',component:EmployeeComponent},
{path:'Login',component:LoginComponent},
{path:'Dashboard',component:DashboardComponent},
{path:'LeaveDetails',component:LeaveDetailsComponent},
{path:'LeaveHistory',component:LeaveHistoryComponent},
{path:'ApproveDeny',component:ApproveDenyComponent},
{path:'applyLeave',component:ApplyLeaveComponent}
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
    ManagerComponent,
    LeaveDetailsComponent,
    LeaveHistoryComponent,
    ApproveDenyComponent,
    ApplyLeaveComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,RouterModule.forRoot(data)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
