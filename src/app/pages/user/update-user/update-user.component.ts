import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit 
{

  constructor(){
      }
      //we can write Update user code here......User API is ready for the update and delete as well

  ngOnInit(): void
  {
    

  }

  updateForm()
  {
    console.log("this is Practice project so not implementing all the functions .....");
      
    Swal.fire('Rest API is ready', 'This is just practice project...', 'success');
  }

}
