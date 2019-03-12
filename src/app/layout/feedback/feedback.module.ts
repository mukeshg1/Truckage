import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackComponent } from './feedback.component';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    PageHeaderModule
  ]
})
export class FeedbackModule { }
