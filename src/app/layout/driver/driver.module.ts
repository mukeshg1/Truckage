import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverComponent } from './driver.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  declarations: [DriverComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    PageHeaderModule
  ]
})
export class DriverModule { }
