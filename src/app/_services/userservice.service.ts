import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';

import { RegisterData } from '../_models/registerData';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  registerUrl = 'http://localhost/SlimTruckage/public/register';

  constructor(private http: HttpClient) { }

  registerUser(registerData: RegisterData) {
    console.log(registerData);
    return this.http.post(this.registerUrl, registerData);
  }
}
