import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    userName : '',
    password : '',

  };

  constructor(private snack:MatSnackBar, private loginService:LoginService, private router:Router) {}


  ngOnInit(): void {  }

  loginForm()
  {
    console.log("button clicked !!");

    if(this.loginData.userName.trim() == "" || this.loginData.userName == null )
    {
        this.snack.open("Username is required !! ", "ok");
        return;
    } 

    if(this.loginData.password.trim() == '' || this.loginData.password == null )
    {
        this.snack.open("Password is required !! ", "ok");
        return;
    }

    //adding data into service to perform the Token Generating function 
    
    this.loginService.tokenGeneration(this.loginData).subscribe({
      next: (data:any) => 
      {
        console.log(data);
       
    //after getting token into data.token variable
       this.loginService.loginUser(data.token);
        
       
    //geeting current user by providing access token
       this.loginService.getCurrentUser().subscribe({
          next: (user:any) =>
          {
            this.loginService.setUser(user);
            console.log(user);
            //redirect to the ADMIN Dashboard
            if(this.loginService.getUserRole() == 'ADMIN')
            {
              //ADMIN-DASH
             // window.location.href='/admin-dash'
             this.router.navigate(['admin-dash']);
            }
            //Redirect to the Normal User Dashboard
            else if(this.loginService.getUserRole() == 'NORMAL')
            {
              //NORMAL-DASH
              //window.location.href='/user-dashboard'
              this.router.navigate(['user-dash']);
            }
            else
            {
              this.loginService.logout();
              location.reload();
            }
          },
          error : (error) =>
          {
            console.log(error);
            Swal.fire('Error', 'Something went wrong !!!', 'error');

          }

         });


      },
      error :error => 
      {
        console.log(error);
        Swal.fire('Error', 'Something went wrong !!!', 'error');
      }
    });
    
  }

}
