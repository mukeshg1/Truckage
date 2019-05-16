import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerdashboardRoutingModule } from './customerdashboard-routing.module';
import { CustomerdashboardComponent } from './customerdashboard.component';

@NgModule({
  declarations: [CustomerdashboardComponent],
  imports: [
    CommonModule,
    CustomerdashboardRoutingModule
  ]
})
export class CustomerdashboardModule { }
