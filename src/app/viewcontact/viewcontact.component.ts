import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {
listtArray=[];
  constructor(private router: Router) { }

  ngOnInit() {
     this.listtArray = JSON.parse(localStorage.getItem('user'));
  }
  clicked(k: number)
  {
    console.log(k);
   // let t:string=k.toString;
    localStorage.setItem('edituser',String(k));
    this.router.navigate(['edituser']);
  }
}
