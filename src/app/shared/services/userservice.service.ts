import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';

import { AppSettings } from '../../../environments/environment';
import { RegisterData, ChangePasswordData, UpdateProfileData, FileData } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  // Register User
  registerUser(registerData: RegisterData) {
    return this.http.post(AppSettings.Url + '/register', registerData);
  }

  // Get Name of the User
  getName() {
    return  'Mindfire Solutions';
  }

  changePassword(changeData: ChangePasswordData) {
    return this.http.post(AppSettings.privateUrl + '/change-password', changeData);
  }

  updateProfile(updateData: UpdateProfileData) {
    console.log(updateData);
    return this.http.post(AppSettings.privateUrl + '/update-user-information', updateData);
  }

  fileUpload(File) {
    console.log('File = ', File);
    return this.http.post(AppSettings.privateUrl + '/photo', File, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
