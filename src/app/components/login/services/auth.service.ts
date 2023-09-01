import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginModel } from '../models/login.model';


@Injectable()
export class AuthService {
  private _rota!: 'http://localhost:3000/login'
  private _mockToken = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5cF'
  }

  constructor(private http: HttpClient) {}

  login(event: LoginModel): Observable<any> {
    const credentials = {
      login: event.login,
      password: event.password
    };

    return of(this._mockToken)

    // return this.http.post(this._rota, { credentials }).pipe(
    //   map((response: any) => {
    //     const token = response.token;
    //     if (token) {          
    //       localStorage.setItem('token', token);
    //     }
    //     return response;
    //   })
    // );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return true    
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
