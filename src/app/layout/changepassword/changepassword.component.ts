import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserserviceService } from '../../shared/services/userservice.service';
import { AuthenticationService } from '../../shared/services/authentication.service';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../shared/helpers/must-match.validator';

// import custom password pattern
import { AppSettings } from '../../shared/helpers/settings';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  submitted = false;
  error = '';

  constructor(private formBuilder: FormBuilder,
    private userService: UserserviceService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8),
                         Validators.pattern(AppSettings.pattern)]],
      confirmNewPassword:  ['', [Validators.required, Validators.minLength(8),
                                 Validators.pattern(AppSettings.pattern)]]
  },
  {
    validator: MustMatch('newPassword', 'confirmNewPassword')
  });
  }

  get f() {
    return this.changePasswordForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.changePasswordForm.invalid) {
      return;
    }
    this.userService.changePassword().subscribe( data => {
      console.log(data);
    },
    error => {
        this.error = error;
        console.log(this.error);
    });
  }

}
