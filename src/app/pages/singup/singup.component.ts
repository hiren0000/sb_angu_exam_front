import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor () {}

  public user={
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    profile: '',
  }

  ngOnInit(): void {
      
  }

  registration()
  {
    alert('pls be care once u submit this file then no revert option ');
  }


}
