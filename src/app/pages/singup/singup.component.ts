import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor (private userService:UserService, private snack:MatSnackBar) {}

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
      //alert('User is required !!');
      this.snack.open("UserName is required !!","ok");
      return;
    }

    // add User : userService

    this.userService.regiserUser(this.user).subscribe({
      next: response => 
      {
        console.log(response);
        //alert('successfully added ')
        Swal.fire('Success', 'User is successfully added', 'success');
      },
      error :error => 
      {
        console.log(error);
        Swal.fire('Error', 'Something went wrong !!!', 'error');
      }
    });
    

  }


}
