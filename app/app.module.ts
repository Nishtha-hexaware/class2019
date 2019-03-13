import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from'@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{RouterModule,Routes} from '@angular/router';
import{FormsModule} from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';

import { EmployComponent } from './employ/employ.component';
import { ManagerComponent } from './manager/manager.component';
import { LeavePendingComponent } from './leave-pending/leave-pending.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { ApproveDenyComponent } from './approve-deny/approve-deny.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { FilterdataPipe } from './filterdata.pipe';
import { SortdataPipe } from './sortdata.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeavePendingService } from './leave-pending.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewComponent } from './new/new.component';

const data:Routes= [
 {path:'',component:NewComponent},
 {path:'Employee',component:EmployeeComponent},
 {path:'Login',component:LoginComponent},
 {path:'Dashboard',component:DashboardComponent},
 {path:'ApproveDeny',component:ApproveDenyComponent},
 {path:'ApplyLeave',component:ApplyLeaveComponent},
 {path:'LeaveHistory',component:LeaveHistoryComponent},
 {path:'LeavePending',component:LeavePendingComponent},
 {path:'Manager',component:ManagerComponent},
 {path:'Employ',component:EmployComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SortdataPipe,
    FilterdataPipe,
    EmployComponent,
    LeavePendingComponent,
    LeaveHistoryComponent,
    LoginComponent,
    ManagerComponent,
    ApplyLeaveComponent,
    ApproveDenyComponent,
    DashboardComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,NgxPaginationModule,

    HttpModule,FormsModule,RouterModule.forRoot(data)
  ],
  providers: [LeavePendingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
