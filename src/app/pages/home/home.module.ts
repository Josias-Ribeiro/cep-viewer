import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { MaterialCoreModule } from 'src/app/shared/modules/material.core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'src/app/shared/modules/ngx-mask.module';


@NgModule({
  declarations: [
    HomeComponent
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
