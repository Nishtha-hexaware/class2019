import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

    sayHello() : string {
      return "Welcome to Angular...";
    }
    topic() : string {
      return "Angular 7 services Concept....";
    }
  constructor() { }
}
