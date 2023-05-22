import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor (private userService:UserService) {}

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
    //validations
    if(this.user.userName == '' || this.user.userName == null)
    {
      alert('User is required !!');
      return;
    }

    // add User : userService

    this.userService.regiserUser(this.user).subscribe({
      next: response => 
      {
        console.log(response);
        alert('successfully added ')
      },
      error :error => 
      {
        console.log(error);
        alert('something went wrong ')
      }
    });
    

  }


}
