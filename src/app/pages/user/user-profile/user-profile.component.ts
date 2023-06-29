import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit
{

  userData = 
  {
     id: '',
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    profile: '',
    enabled : '',
    authorities: [
      {
        authority: '',
      }
    ]
  }

  constructor(private loginServ:LoginService){}

  ngOnInit(): void 
  {
    this.userData = this.loginServ.getUser();
      
  }
}
