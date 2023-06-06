import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  cid='';

  quizzes =[
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
  ]

  constructor(private route:ActivatedRoute, private quizSer:QuizService) {}

  ngOnInit(): void 
  {
      this.cid = this.route.snapshot.params['cId'];

      if(this.cid == '0')
      {
        //console.log("show all quiz");
//--------------Getting All the List of Quizzes------------------------------------------------------------------------------     
        this.quizSer.getListQuizzes().subscribe({
          next: (data:any)=>
          {
            this.quizzes = data;
          },
          error: (error)=>
          {
            console.log(error);
            Swal.fire('Error', 'Something went wrong !! ', 'error');
          }
        });
        
      }else
      {
        console.log('show specific quiz ');
       
        
      }
  }
}
