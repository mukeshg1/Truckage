import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../shared/services/authentication.service';
import { RegisterData } from '../shared/models/registerData';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    currentUser: RegisterData;
    loading = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        public router: Router,
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute ) {  }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            loginEmail: ['', [Validators.required, Validators.email]],
            loginPassword: ['', Validators.required]
        });
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() {
        return this.loginForm.controls;
    }
    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }
        // alert ('Login SUCCESS!!:-' + JSON.stringify(this.loginForm.value));
        this.loading = true;
        this.authenticationService.login(this.f.loginEmail.value, this.f.loginPassword.value)
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
