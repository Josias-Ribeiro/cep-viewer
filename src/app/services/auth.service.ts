import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginModel } from '../pages/login/models/login.model';
import { Router } from '@angular/router';


@Injectable({providedIn:'root'})
export class AuthService {  
  private _mockToken = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5cF'
  }

  constructor(private http: HttpClient, private _router: Router) {}

  login(event: LoginModel): Observable<any> {
    const credentials = {
      login: event.login,
      password: event.password
    };
    return of(this._mockToken)   
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return true    
  }

  logout(): void {
    localStorage.removeItem('token');
    this._router.navigateByUrl('/login')
  }
}
