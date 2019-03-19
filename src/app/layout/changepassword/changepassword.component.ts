import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../shared/helpers/must-match.validator';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8),
        Validators.pattern(/^(?=.*\d)(?=.*[A-Za-z])(?=.*[!@#$%])[0-9A-Za-z!@#$%]{8,}$/)]],
      confirmNewPassword:  ['', [Validators.required, Validators.minLength(8),
        Validators.pattern(/^(?=.*\d)(?=.*[A-Za-z])(?=.*[!@#$%])[0-9A-Za-z!@#$%]{8,}$/)]]
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
    console.log('Working');
  }

}
