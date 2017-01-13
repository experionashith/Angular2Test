import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listtArray = [];
  title = 'app works!';
  //pushing a single entry to localStorage
  myObj = { "id": "u1", "telenum": "7736775545", "fname": "Achu", "lname": "Madan", "address": "49" };
  
  constructor() {
    this.listtArray.push(this.myObj);
    localStorage.setItem("user", JSON.stringify(this.listtArray));

  }
}
