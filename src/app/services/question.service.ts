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
}
