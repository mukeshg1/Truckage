import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';

import { AppSettings } from '../helpers/settings';
import { RegisterData, changePasswordData } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

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

  changePassword(changeData: changePasswordData) {
    console.log(changeData);
    return this.http.post('http://172.16.9.102/industrial-transportation-slim/public/private/v1/change-password', changeData);
  }
}
