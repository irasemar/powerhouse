import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from '../services/auth.services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService,private router: Router) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const acc = this.auth.getAccount();
    if(acc){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${acc.Token}`,
          'Content-Type' : 'application/json'
        }
      });
    }else{
      
      request = request.clone({
        setHeaders: {
          'Content-Type' : 'application/json'
        }
      });
    }
    
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {      
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {  
          this.router.navigate(['/']);
        }
      }
    });
  }
}