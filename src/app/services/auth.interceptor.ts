import { Injectable } from '@angular/core';
import {HttpRequest,   HttpHandler,   HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginService } from './login.service'; 
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
    constructor(public loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = this.loginService.getToken();

    console.log("inside interceptor !! ")
    

    if(token != null)
    {
      request = request.clone({
      setHeaders: { Authorization: `Bearer ${token}`},
    });

    }  

    return next.handle(request);
  }
}

export const authInterceptorProviders =[
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true,

    },
];