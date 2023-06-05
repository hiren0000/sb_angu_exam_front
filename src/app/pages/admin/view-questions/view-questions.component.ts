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
      quesId: '',
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

//Fetching Questions by Quiz Id-----------------------------------------------------------------------------------------
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
    

//Deleting Question by id-------------------------------------------------------------------------------------------

    public deleteQuestion(quesId:any)
    {
      // Using swal object here to confirm from Admin, they r sure to delete this question
      Swal.fire({
        icon: 'warning',
        title: 'Are you sure you want to delete???',
        confirmButtonText: 'Delete',
        showCancelButton: true,
      }).then((result)=>
      {
  
  //calling delete function
      if(result.isConfirmed)
      {
        this.questionSer.deleteQuestionById(quesId).subscribe({
          next: (data:any)=>
          { 
            console.log(data);
            
      //below function will help page to do the filter and get the accurate data after deletation 
            this.questions = this.questions.filter((question) => question.quesId != quesId)
            Swal.fire('Success', 'Quiz successfully deleted !!', 'success');
          },
          error: (error)=>
          {
            console.log(error);
            Swal.fire('Error', 'Something went wrong !! ', 'error');
    
          }
        });
      }

    });
    
      
   }
}


