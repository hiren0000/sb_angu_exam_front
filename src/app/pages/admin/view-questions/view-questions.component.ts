import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  qId= '';
  title='';
  questions = [

    {
      content: '',
      image: '',
      option1: '',
      option2: '',
      option3: '',
      option4:'',
      answer: '',
      quiz: {
        qId: '',
      }

    }


  ];


  constructor(private route: ActivatedRoute, private questionSer:QuestionService) {}

  ngOnInit(): void {

    this.qId =this.route.snapshot.params[('qId')];
    this.title = this.route.snapshot.params[('title')];

//Fetching Questions by Quiz Id
    this.questionSer.getQuestbyQuiz(this.qId).subscribe({
      next: (data:any)=>
      {
        console.log(data);
        
        this.questions=data;
      },
      error: (error)=>
      {
        Swal.fire('Error', 'Somethign went wrong !!', 'error');
      }
    });
    
    
      
  }
}
