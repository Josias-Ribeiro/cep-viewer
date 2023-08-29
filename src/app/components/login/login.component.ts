import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './view/login.component.html',
  styleUrls: ['./view/login.component.scss']
})
export class LoginComponent {
  event!: string;
  minlength: number = 8;

  loginSubmit(event: any) {
    console.log(event)
  }

  

}
