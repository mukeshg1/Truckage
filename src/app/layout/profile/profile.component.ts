import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { routerTransition } from '../../router.animations';
import { UserserviceService } from '../../shared/services/userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;
  UserName = '';
  UserEmail = 'mindfire@email.com';

  Gender: string[] = ['Male', 'Female', 'Others'];

  idType: string[] = ['Aadhar Card', 'Voter Card', 'PAN Card', 'Passport'];

  constructor(private formBuilder: FormBuilder, private userService: UserserviceService) { }

  ngOnInit() {
    this.UserName = this.userService.getName();
    // this.UserEmail = this.userService.getName();
    this.profileForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      idType: ['', Validators.required],
      idNumber: ['', Validators.required],
      id: ['', Validators.required],
      locality: ['', Validators.required],
      landmark: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required]
    });
  }
  get f() {
    return this.profileForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    }
    alert ('SUCCESS!!:-' + JSON.stringify(this.profileForm.value));
  }

}
