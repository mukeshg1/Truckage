import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, public router: Router) {    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            loginEmail: ['', [Validators.required, Validators.email]],
            loginPassword: ['', Validators.required]
        });
    }

    get f() {
        return this.loginForm.controls;
    }
    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }
        alert ('Login SUCCESS!!:-' + JSON.stringify(this.loginForm.value));
    }
    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
