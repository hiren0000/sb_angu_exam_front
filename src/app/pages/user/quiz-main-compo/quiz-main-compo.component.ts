import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-main-compo',
  templateUrl: './quiz-main-compo.component.html',
  styleUrls: ['./quiz-main-compo.component.css']
})
export class QuizMainCompoComponent implements OnInit {

  qId='';


  questions = [

    {
      quesId: '',
      content: '',
      image: '',
      option1: '',
      option2: '',
      option3: '',
      option4:'',
      answer: '',
      quiz : {
        qId: '',
        title: '',
        description: '',
      }

    }
  ]

  constructor( private route:ActivatedRoute, private locationSt:LocationStrategy, private questionSer:QuestionService) { }

  ngOnInit(): void {
    
    
    this.preventBackButton(); 
    
    this.qId = this.route.snapshot.params['qId'];
      //console.log(this.qId);
      this.getQuestionbyQuiz();


      
  }

//Fetching Question for Particular quiz and as it provides for giving number of quetions==============================
      public getQuestionbyQuiz()
      {
        this.questionSer.getQuestbyQuizUser(this.qId).subscribe({
          next: (data:any)=>
          {
            this.questions=data;
          },
          error :(error)=>
          {
            Swal.fire('Error', 'Something wrong with server !!', 'error');
          }
          
        });
      }  
 
//Below function would help us to disable back button function in browser-------------------------------------------
      preventBackButton()
      {
        history.pushState(null, 'null',  location.href);
      
        this.locationSt.onPopState(()=>{
          history.pushState(null, 'null', location.href);
        });
      }
}
