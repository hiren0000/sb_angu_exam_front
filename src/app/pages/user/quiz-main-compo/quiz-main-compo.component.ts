import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  marksGot = 0;
  correctAnswer = 0;
  attempted = 0;
  

  markSingle= 0;

  timer:any;

  questions:any = [

    {
      quesId: '',
      content: '',
      image: '',
      option1: '',
      option2: '',
      option3: '',
      option4:'',
      answer: '',
      givenAnswer: '',
      
      quiz : {
        qId:'',
        title: '',
        description: '',
        maxMarks: '',
        numberOfQuestions: '', 
      }

    }
  ]

  constructor( private route:ActivatedRoute,
     private locationSt:LocationStrategy,
      private questionSer:QuestionService,
      private snack:MatSnackBar) { }

  ngOnInit(): void {
    
    
    this.preventBackButton(); 
    
    this.qId = this.route.snapshot.params['qId'];
      //console.log(this.qId);
      this.getQuestionbyQuiz();

      this.timerFunc();


      
  }

//Fetching Question for Particular quiz and as it provides for giving number of quetions==============================
      public getQuestionbyQuiz()
      {
        this.questionSer.getQuestbyQuizUser(this.qId).subscribe({
          next: (data:any)=>
          {
            this.questions=data;
            console.log(this.questions);
            
            this.timer = this.questions.length*60;
            console.log(this.questions.givenAnswer);
            
           //console.log(this.givenAnswer);
            

           /* this.questions.forEach((q)=>
            {
              q.givenAnswer='';
            });*/
          },
          error :(error)=>
          {
            console.log(error);          
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

//Submitting quiz by user ----------------------------------------------------------------------------

      public submitQuiz()
      {
        Swal.fire({
          title: 'Do you want to submit the quiz?',
          showCancelButton: true,
          confirmButtonText: 'Submit',
          denyButtonText: 'Cancel',
          icon: 'question',
        }).then((e) =>
        {
          if(e.isConfirmed)
          {
            console.log("Under Maintainance !!! ");
            this.snack.open('This Function is Under Maintainance, will be workign soon !!', 'ok');

            this.evalMarsk();
           
            
          }
        });
        
      }

//Setting timer that automatically finishes the quiz after ending the timer ---------------------------------------------------------------------------------------------------
      timerFunc()
      {
       let t = window.setInterval(()=>{

       
        //coding here
        if(this.timer <= 0)
        {
          this.evalMarsk();
          clearInterval(t);

        }
        else
        {
          this.timer--;

        }
        
      }, 1000);

      }      

//For getting formated remaining time
      getFormatedtime()
      {
        let m = Math.floor(this.timer/60);
        let s = this.timer-m*60;
        return `${m} min: ${s}: sec`;
        
      }

//Calculating marks--------------------------------------------------------------------------------------------------
   //this needs to recheck and implemented properly 
  evalMarsk()
    {

      this.snack.open('This Function is Under Maintainance, will be sorted soon !!', 'ok');
  
    }


}
