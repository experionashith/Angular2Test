import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }
  //function to get the registered data from local storage
  getdata()
  {
    return JSON.parse(localStorage.getItem('user'));
  }
  //function to get the intex to edit from local storage
  getindex()
  {
    return Number(localStorage.getItem('edituser'));
  }
  
}
