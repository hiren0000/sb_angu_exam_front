import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit{

  categories = [
    {
      cId:'',
      title:'',
      description: '',
    },
  ]

  constructor(private categorySer:CategoryService) {}

  ngOnInit(): void {

    this.categorySer.getListOfCategories().subscribe({
      next: (data:any)=>
      {
        this.categories=data;
      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire('Error', 'Something went wrong !!' , 'error');
        
      }
    });
      
  }

}
 