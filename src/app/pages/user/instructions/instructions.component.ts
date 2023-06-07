import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit  {

  qId='';

  quiz =
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
    }
  
  constructor(private route:ActivatedRoute, private quizSer:QuizService) {}

  ngOnInit(): void {
      this.qId = this.route.snapshot.params['qId'];
      console.log(this.qId);
      

//Fetching specific quiz data
      this.quizSer.getSingleQuiz(this.qId).subscribe({
        next: (data:any)=>
        {
          console.log(data);
          this.quiz= data;
                    
        },
        error: (error)=>
        {
            console.log(error);
            Swal.fire('Error', 'Something went wrong !! ', 'error');      
        }

      });
  }

}
