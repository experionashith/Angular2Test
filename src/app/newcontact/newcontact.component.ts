import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import {Router} from "@angular/router"
import { LocalstorageService } from '../localstorage.service';
@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit {
 ngOnInit() {
  }
 constructor(private router: Router,private localservice: LocalstorageService)
  {}

  
 
 uid: number = 1;
  myObj;
  myJSON;
  text1;
  text : string='u';
  obj: string;
  listArray = [];
  listtArray = [];
  userexist: boolean=false;
user= {
          telenum: '',
          fname: '',
          lname: '',
          address: ''
        };
        
  isubmit(form : NgForm){
    
    console.log(this.user);
    //making a unique id
     this.uid++;
     this.text1=this.text+this.uid.toString();
     
     this.myObj = { "id":this.text1, "telenum":this.user.telenum, "fname":this.user.fname, "lname":this.user.lname, "address":this.user.address};
  
     this.listtArray = JSON.parse(localStorage.getItem('user'));
     //loop to check uniqueness of telephone number
     for(let i=0;i<this.listtArray.length;i++)
     {
       if(this.listtArray[i].telenum==this.user.telenum)
       {
         alert("This user already exist");
         this.userexist=true;
       }
     }
     if(!this.userexist)
     {
       this.listtArray.push(this.myObj);
     }
		
    //localstorage sroring
		localStorage.setItem('user', JSON.stringify(this.listtArray));

  
     console.log(this.listtArray.length)
     this.router.navigate(['viewall']);

      
  }
  
}


 




