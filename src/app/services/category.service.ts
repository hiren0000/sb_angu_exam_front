import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  //get all categories
  public getListOfCategories()
  {
    return this.http.get(`${baseUrl}/api/v1/category/`);
  }

  //Add new Caregory
  public addNewCate(category:any)
  {
    return this.http.post(`${baseUrl}/api/v1/category/`,category);
  }
}
