import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsComponent } from './trips.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  declarations: [TripsComponent],
  imports: [
    CommonModule,
    TripsRoutingModule,
    PageHeaderModule
  ]
})
export class TripsModule { }
