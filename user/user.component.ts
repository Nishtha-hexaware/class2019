import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : Observable<User[]>;

  constructor(private userService: UserService, private _router : Router) {
    this.users = userService.getUser();
   }
   login(username) {
     localStorage.setItem("username",username);
     this._router.navigate(["../Login"]);
   }

  ngOnInit() {
  }

}
