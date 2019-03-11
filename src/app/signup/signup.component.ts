import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';

import { routerTransition } from '../router.animations';
import { UserserviceService } from '../shared/services/userservice.service';
import { RegisterData } from '../shared/models/registerData';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    submitted = false;
    data: RegisterData;

    constructor(private formBuilder: FormBuilder, private userService: UserserviceService) {    }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    get f() {
        return this.signupForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        if (this.signupForm.invalid) {
            return;
        }
        // this.data = this.signupForm.value;
        // this.userService.registerUser(this.data).subscribe();
        this.insertRecord(this.signupForm);
        alert ('SUCCESS!!:-' + JSON.stringify(this.signupForm.value));
    }
    insertRecord(signupForm) {
        this.userService.registerUser(signupForm.value).subscribe( res => {
            this.resetForm(signupForm);
            console.log(res);
    });
    }
    resetForm(signupForm) {

    }
}
