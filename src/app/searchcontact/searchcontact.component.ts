import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-searchcontact',
  templateUrl: './searchcontact.component.html',
  styleUrls: ['./searchcontact.component.css']
})
export class SearchcontactComponent implements OnInit {
  user= {  
         telenum: '',
          fname: '',
          lname: '',
          address: ''
        };
  search: string;
  usernotexist: boolean=false;
  listtArray = [];
  constructor() { }

  ngOnInit() {
  }
isubmit(form : NgForm)
{   

   this.search=this.user.fname;
   this.listtArray = JSON.parse(localStorage.getItem('user'));
     //loop to search a telephone number
     for(let i=0;i<this.listtArray.length;i++)
     {
       if(this.listtArray[i].fname==this.search)
       {
        this.user.telenum =this.listtArray[i].telenum;
        this.user.lname=this.listtArray[i].lname;
        this.user.address=this.listtArray[i].address;
        this.usernotexist=true;
       }
     }
    if(!this.usernotexist)
      {
          alert("No match found");
      }
  }
}
