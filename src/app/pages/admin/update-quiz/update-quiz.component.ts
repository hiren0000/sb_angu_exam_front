import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private quizSer:QuizService,
     private cateSer:CategoryService,
     private router:Router){}
  
  qid='';

  quizData={
    
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category:
    {
      cId: '',
    },
  }

  categories = [
    {
      cId: '',
      title: '',
      description: '',
    }
  ]

  ngOnInit(): void 
  {
    //getting qid through URL
      this.qid = this.route.snapshot.params['qId'];
//      alert(this.qid);

//Fetching single Quiz
      this.quizSer.getSingleQuiz(this.qid).subscribe({
        next: (data:any)=>
        {
          this.quizData=data;
          console.log(this.quizData);
        },
        error :(error)=>
        {
          console.log(error);
          Swal.fire('Error', 'Something went wrong !!', 'error');

        }
      });

//Fethcing categoris 
      this.cateSer.getListOfCategories().subscribe({
        next: (data:any)=>
        {
          this.categories=data;
        },
        error: (error)=>
        {
          console.log(error);
          Swal.fire('Error', 'Something went wrong !!', 'error');

        }
      });
  
  }

  //Updating existing quiz data
  public updateQuizForm()
  {

//Validation needs to put :: later will do
    

    this.quizSer.updateQuiz(this.quizData).subscribe({
      next: (data:any)=>
      {
        Swal.fire('Success', 'Successfully updated quiz ', 'success').then((e)=>{
        this.router.navigate(['/admin-dash/quizzes'])
      });

      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire('Error', 'Something went wrong !!', 'error');

      }
    });
    
  }


 

}
