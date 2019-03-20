import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';

import { AppSettings } from '../helpers/settings';
import { RegisterData } from '../models/registerData';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  token = null;

  constructor(private http: HttpClient) { }

  // Register User
  registerUser(registerData: RegisterData) {
    console.log(registerData);
    return this.http.post(AppSettings.Url + '/register', registerData);
  }

  // Get Name of the User
  getName() {
    return  'Mindfire Solutions';
  }

  changePassword() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.token = user && user.token;
    console.log(this.token);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
    console.log(httpOptions.headers);
    return this.http.post('http://172.16.9.102/industrial-transportation-slim/public/private/v1/change-password',
    { headers: new HttpHeaders({
      // 'Content-Type':  'application/json',
      'Authorization': `Bearer ${this.token}`
    })});
  }
}

// {
//   headers: new HttpHeaders().set('Authorization',  `Bearer ${this.token}`)
// }
