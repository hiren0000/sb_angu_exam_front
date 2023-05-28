import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //get current user
  public getCurrentUser()
  {
    return this.http.get(`${baseUrl}/api/v1/auth/current-user `);
  }


  //Generating Token
  public tokenGeneration(loginData: any)
  {
    return this.http.post(`${baseUrl}/api/v1/auth/generate-token`, loginData);
  }

  /*
  //login user :: set token into the localstorage
  public loginUser(token: any)
  {
    localStorage.setItem("token", token);
    return true;
  }

  //is User logged in or not 
  public isLoggedIn()
  {
    let tokenStr = localStorage.getItem("token")
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null)
    {
    return false; 
    }
    else
    {
      return true;
    }
  }

  //logout: remove Jwt from local storage
  public logout()
  {
    localStorage.removeItem("token");
    return true;

  }

  //get token from local storage
  public getToken()
  {
    localStorage.getItem("token");
  }

  //setting user details locally
  public setUser(user:any)
  {
    localStorage.setItem('user', JSON.stringify(user));

  }

  //getting User details 
  public getUser()
  {
    let userStr = localStorage.getItem('user');
    if(userStr != null)
    {
      return JSON.parse(userStr);
    }
    else
    {
      this.logout();
      return null;
    }
  }

  // get User Role::::::again do check this method not sure how does it work 
  public getUserRole()
  {
    let user = this.getUser()
    return user.authorities[0].authority;
  }*/
}
