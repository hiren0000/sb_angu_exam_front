import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit{

  quiz = {
    
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestions: '',
      active: true,
      category: 
      {
        cId:'',
      }

};

categories = [
  {
    cId: '',
    title: '',
    description: '',
  }
]

constructor(private categoryService:CategoryService, private quizServ:QuizService) {}

ngOnInit(): void 
{
  //this is for the gettin categories 

  this.categoryService.getListOfCategories().subscribe
  ({
    next : (data:any) =>
    {
      
      this.categories=data;
      console.log(this.categories);

    },
    error: (error)=>
    {
      console.log(error);
      Swal.fire("Error !!", "error in fetching data", 'error');

    }

  });
}


//Adding new quiz
public addQuizForm()
{

//Validations needs to implement for empty fields

  this.quizServ.addNewQuiz(this.quiz).subscribe({
    next:(data:any)=>
    {
      console.log(data);
      Swal.fire('Succss', 'Quiz added successfully', 'success');


    },
    error: (error)=>
    {
      console.log(error);
      Swal.fire("Error !! ", 'Something went wrong', 'error');
    }
    
  });
  
}

}
