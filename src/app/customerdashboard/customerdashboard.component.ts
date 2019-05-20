import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.scss']
})
export class CustomerdashboardComponent implements OnInit {

  constructor(
    public router: Router,
    private _authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logout() {
    this._authenticationService.logout();
    this.router.navigate(['/homepage']);
}

}
