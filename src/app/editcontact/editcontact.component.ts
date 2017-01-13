
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import {Router} from "@angular/router"
import { LocalstorageService } from '../localstorage.service';
@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {

 ngOnInit() {
   //taking the id of the user from local storage
   this.edituser = this.localservice.getindex();
   //taking all data of the user from local storage
   this.listtArray = this.localservice.getdata();
   //assigning data to the form
   this.user= {
          telenum: this.listtArray[this.edituser].telenum,
          fname: this.listtArray[this.edituser].fname,
          lname: this.listtArray[this.edituser].lname,
          address: this.listtArray[this.edituser].address
        };
  }
 constructor(private router: Router,private localservice: LocalstorageService)
  {}

  
 edituser:number;
 uid: number = 1;
  myObj;
  myJSON;
  text1;
  text : string='u';
  obj: string;
  listArray = [];
  listtArray = [];
user= {
          telenum: '',
          fname: '',
          lname: '',
          address: ''
        };
        
  isubmit(form : NgForm){
    
    console.log(this.user);
     this.uid++;
     this.text1=this.text+this.uid.toString();
     //making the form data to a object
     this.myObj = { "id":this.text1, "telenum":this.user.telenum, "fname":this.user.fname, "lname":this.user.lname, "address":this.user.address};

    //loop to edit the correct user
    for(let i=0;i<this.listtArray.length;i++)
    {
      if(this.edituser!=i)
      {
        this.listArray.push(this.listtArray[i]);
      }
    }
		this.listArray.push(this.myObj);
    //localstorage sroring
		localStorage.setItem('user', JSON.stringify(this.listArray));

  
     console.log(this.listtArray.length)
     this.router.navigate(['viewall']);

      
  }
  
}


 

