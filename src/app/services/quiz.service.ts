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

  //Getting a single quiz
  public getSingleQuiz(qId:any)
  {
    return this.http.get(`${baseUrl}/api/v1/quiz/${qId}`);
  }

  //Adding a new quiz
  public addNewQuiz(quiz:any)
  {
    return this.http.post(`${baseUrl}/api/v1/quiz/` ,quiz);
  }

  //Updating Quiz 
  public updateQuiz(quiz:any)
  {
    return this.http.put(`${baseUrl}/api/v1/quiz/`, quiz);
  }

  //Deleting quiz by id
  public deleteQuiz(qId:any)
  {
    return this.http.delete(`${baseUrl}/api/v1/quiz/${qId}`);
  }

  //get list of quizzes by category
  public getAllQuizByCat(cId:any)
  {
    return this.http.get(`${baseUrl}/api/v1/quiz/category/${cId}`)
  }

  //Get only active quizzes
  public getAllActiveQuizzes()
  {
    return this.http.get(`${baseUrl}/api/v1/quiz/active`);

  }

  //Get list of active quizzes by category
  public getAllActiveQuizzesByCat(cId:any)
  {
    return this.http.get(`${baseUrl}/api/v1/quiz/category/active/${cId}`);
  }

}
