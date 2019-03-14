import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverComponent } from './driver.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  declarations: [DriverComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    PageHeaderModule,
    NgbModule
  ]
})
export class DriverModule { }
