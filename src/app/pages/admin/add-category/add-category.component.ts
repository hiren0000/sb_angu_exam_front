import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  category={
    title: '',
    description: '',

  };

  constructor(private categoryService:CategoryService, private snack:MatSnackBar){}

  public addCategoryForm()
  {

    if(this.category.description==null &&  this.category.title==null)
    {
      this.snack.open("Fields are required !!", "ok");
      return;
    }

    else if(this.category.title.trim()=='' || this.category.title==null)
    {
      this.snack.open("Title Required !!", "ok");
      return;
    }

    else if(this.category.description.trim()=='' || this.category.description==null)
    {
      this.snack.open("Description Required !!", "ok");
      return;
    }


    //Adding category
    this.categoryService.addNewCate(this.category).subscribe
    ({ 
      next: (data:any)=>
      {
        Swal.fire("Success !!", "Category is successfully added", "success");
        


      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire('Error !!', 'Somethign went wrong !! ', 'error');

      } 

    });

    

  }

}
