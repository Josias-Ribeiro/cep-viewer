import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { MaterialCoreModule } from 'src/app/shared/modules/material.core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'src/app/shared/modules/ngx-mask.module';
import { CepsPesquisadosComponent } from './components/ceps-pesquisados-card/ceps-pesquisados-card.component';
import { HistoricoCepsComponent } from './components/historico-ceps/historico-ceps.component';


@NgModule({
  declarations: [
    HomeComponent,
    CepsPesquisadosComponent,
    HistoricoCepsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    ReactiveFormsModule,
    FormsModule,
    
    MaterialCoreModule,
    FlexLayoutModule,
    NgxMaskModule
    
  ]
})
export class HomeModule { }
