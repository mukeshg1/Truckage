import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from './../../shared';

import { TruckRoutingModule } from './truck-routing.module';
import { TruckComponent } from './truck.component';

@NgModule({
  declarations: [TruckComponent],
  imports: [
    CommonModule,
    TruckRoutingModule,
    ReactiveFormsModule,
    PageHeaderModule
  ]
})
export class TruckModule { }
