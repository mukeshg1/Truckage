import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CanDeactivateGuard } from '../../shared/formGuard/can-deactivate.guard';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PageHeaderModule } from './../../shared';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

@NgModule({
  declarations: [ProfileComponent, UpdateprofileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ CanDeactivateGuard ],
})
export class ProfileModule { }
