import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

//Getting Specific quiz's questions
public getQuestbyQuiz(qId:any)
{
  return this.http.get(`${baseUrl}/api/v1/question/quiz/all/${qId}`);
}

//Add new question to the specific quiz
public addNewQuestion(question:any)
{
  return this.http.post(`${baseUrl}/api/v1/question/`, question);
}

//Delete question by questionId
public deleteQuestionById(quesId:any)
{
  return this.http.delete(`${baseUrl}/api/v1/question/${quesId}`);
}

//Update question 
public updateQuestion(question:any)
{
  return this.http.put(`${baseUrl}/api/v1/question/`, question);
}

//get single question by id
public getSingleQuestion(quesId:any)
{
  return this.http.get(`${baseUrl}/api/v1/question/${quesId}`);
}
}
