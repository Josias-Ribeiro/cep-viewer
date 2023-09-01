import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './view/login.component.html',
  styleUrls: ['./view/login.component.scss']
})
export class LoginComponent {
  event!: string;
  minlength: number = 8;

  constructor(private _authService: AuthService){}

  loginSubmit(event: any) {
    this._authService.login(event).subscribe(res => {
      localStorage.setItem('token', res.token);
    })
   
  }

  

}
