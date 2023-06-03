import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes=[
    {
      qId:'',
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestions: '',
      category:{
        cId:'',
        title:'',
        description: '',
      },

    },
    

  ];

  constructor(private quizSer:QuizService){}

  ngOnInit(): void {
      
    //getting list of Quzzies
    this.quizSer.getListQuizzes().subscribe({
      next: (data:any)=>
      {
        this.quizzes = data;

      },
      error : (error)=>
      {
        console.log(error);
        Swal.fire('Error', 'Something went wrong !! ', 'error');
      }  

    });


  }


}
