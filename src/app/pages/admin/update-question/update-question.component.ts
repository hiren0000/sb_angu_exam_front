import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
    quesid='';

    //rich-text editor
    public Editor = ClassicEditor;

    question = 

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
        title: '',
        description: '',
      },

    }

    constructor(private route:ActivatedRoute,
      private questionSer:QuestionService,
      private router:Router){}

    ngOnInit(): void 
    {
        this.quesid = this.route.snapshot.params[('quesId')];
       // alert(this.quesid);

//Get single Question by id---------------------------------------------------------------------------------------
      
      this.questionSer.getSingleQuestion(this.quesid).subscribe({
        next: (data:any)=>
        {
          //adding existing value into the questin object 
          this.question=data;
          

        },
        error: (error)=>
        {
          console.log(error);
          Swal.fire('Error', 'Something went wrong with server !!', 'error');
        }
      });

    }

//Updating existing question data-----------------------------------------------------------------------------------
    
//Validation needs to put :: later will do

public updateQuestionForm()
{

        this.questionSer.updateQuestion(this.question).subscribe({
          next: (data:any)=>
          {
            Swal.fire('Success', 'Successfully updated question ', 'success').then((e)=>{
            this.router.navigate(['/admin-dash/view-questions/'+this.question.quiz.qId+'/'+this.question.quiz.title])
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
