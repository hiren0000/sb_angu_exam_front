import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  //getting list of quizzes
  public getListQuizzes()
  {
    return this.http.get(`${baseUrl}/api/v1/quiz/`);
  }

  //Adding a new quiz
  public addNewQuiz(quiz:any)
  {
    return this.http.post(`${baseUrl}/api/v1/quiz/` ,quiz);
  }

  //Deleting quiz by id
  public deleteQuiz(qId:any)
  {
    return this.http.delete(`${baseUrl}/api/v1/quiz/${qId}`);
  }
}
