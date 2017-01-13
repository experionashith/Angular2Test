import { Component} from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-homecom',
  templateUrl: './homecom.component.html',
  styleUrls: ['./homecom.component.css']
})
export class HomecomComponent{

  constructor(private router: Router) { }
//navigate to add new component
  addanew(){
    this.router.navigate(['addnew']);
  }
  //navigate to view all saved users
  viewall(){
    this.router.navigate(['viewall']);
  }
  //navigate to find a contact
  searchacom(){
    this.router.navigate(['findacontact']);
  }

}