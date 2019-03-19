import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../shared/helpers/must-match.validator';
import { MustSelect } from '../shared/helpers/select-type.validator';

import { AppSettings } from '../shared/helpers/settings';

import { routerTransition } from '../router.animations';
import { UserserviceService } from '../shared/services/userservice.service';
import { RegisterData } from '../shared/models/registerData';
import { AuthenticationService } from '../shared/services/authentication.service';

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
    error = '';
    loading = false;
    returnUrl: string;

    userType: string[] = ['--Select User Type--', 'Vehicle Owner/Client', 'Vehicle Borrower/Customer', 'Driver'];
    default = 'Vehicle Owner/Client';

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserserviceService,
        private authenticationService: AuthenticationService,
        public router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.signupForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8),
                Validators.pattern(AppSettings.pattern)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(8),
                Validators.pattern(AppSettings.pattern)]],
            userType: ['']
        }, {
            validator: [MustMatch('password', 'confirmPassword'), MustSelect('userType')]
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
        // this.loading = true;
        // this.data = this.signupForm.value;
        // this.userService.registerUser(this.data).subscribe();
        this.insertRecord(this.signupForm);
        // alert ('SUCCESS!!:-' + JSON.stringify(this.signupForm.value));
    }
    insertRecord(signupForm) {
        this.userService.registerUser(signupForm.value).subscribe( res => {
            this.resetForm(signupForm);
            console.log(res);
            this.loginUser();
        },
        error => {
            this.error = error;
            this.loading = false;
        });

        if (this.error = '') {

        }
    }

    resetForm(signupForm) {

    }

    loginUser() {
        console.log('Method called');
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}
