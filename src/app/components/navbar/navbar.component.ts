import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit 
{

  constructor(public loginServ:LoginService, private router:Router){}

  ngOnInit(): void{}

  public logout()
  {
    this.loginServ.logout();
    this.router.navigate(['login'])
   
  }

}
