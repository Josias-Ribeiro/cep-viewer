import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,  
    PoPageLoginModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AuthService]
})
export class LoginModule { }
