import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookTruckRoutingModule } from './book-truck-routing.module';
import { BookTruckComponent } from './book-truck.component';

@NgModule({
  declarations: [BookTruckComponent],
  imports: [
    CommonModule,
    BookTruckRoutingModule
  ]
})
export class BookTruckModule { }
