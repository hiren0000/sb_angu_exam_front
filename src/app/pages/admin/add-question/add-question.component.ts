import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  
  qId= '';
  title='';

  question = 

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
      },

    }

  constructor(private route:ActivatedRoute, private questionSer:QuestionService){}

  ngOnInit(): void {
      this.qId = this.route.snapshot.params[('qId')];
      this.title = this.route.snapshot.params[('title')];

      console.log(this.qId);

      //adding value to the quiz Id
      this.question.quiz[('qId')] = this.qId;
      
  }


//Adding New Question for specific Quiz 
  public addNewQuesti()
  {
  
//Validations needs be implemented later on 

        this.questionSer.addNewQuestion(this.question).subscribe({
        next: (data:any)=>
        {
          Swal.fire('Success', 'New question added to: '+this.title, 'success');

        },
        error: (error)=>
        {
          console.log(error);
          Swal.fire('Error', 'Something went wrong with server !!', 'error');
          

        }
        });

  }

}
