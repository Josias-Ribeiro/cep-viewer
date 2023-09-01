import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'app-login',
  templateUrl: './view/login.component.html',
  styleUrls: ['./view/login.component.scss']
})
export class LoginComponent {
  event!: string;
  minlength: number = 8;

  constructor(private _authService: AuthService){}

 
get customLiterals() {
  const customLiterals: PoPageLoginLiterals = {
    welcome: 'Bem vindo ao CepViewer',
    loginPlaceholder: 'Insira seu usuário de acesso',
    loginErrorPattern:'Insira um email-válido',
    loginHint:'',
    passwordPlaceholder: 'Insira sua senha de acesso',
    passwordErrorPattern: 'Mínimo de 8 caracteres',
    
    submitLabel: 'Acessar sistema'
  };

  return customLiterals
}
  

  loginSubmit(event: any) {
    this._authService.login(event).subscribe(res => {
      localStorage.setItem('token', res.token);
    })
   
  }

  

}
