import { Component, OnInit, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { routerTransition } from '../../router.animations';
import { UserserviceService } from '../../shared/services/userservice.service';
import { FormCanDeactivate } from '../../shared/formGuard/form-can-deactivate';

import { MustSelectGender, MustSelectId } from '../../shared/helpers/select-type.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [routerTransition()]
})
export class ProfileComponent extends FormCanDeactivate implements OnInit {
  verified = true;
  UserName = '';
  UserEmail = 'mindfire@email.com';
  submitted = false;
  error = '';
  @ViewChild('form')
  profileForm: FormGroup;
  selectedFile: File;
  url = '';
  uploadData: FormData;

  Gender: string[] = ['--Select Gender--', 'Male', 'Female'];

  idType: string[] = ['--Select Id Type--', 'Aadhar Card', 'Voter Card', 'PAN Card', 'Passport'];

  constructor(private formBuilder: FormBuilder, private userService: UserserviceService, private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.UserName = this.userService.getName();
    // this.UserEmail = this.userService.getName();
    this.profileForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      idType: ['', Validators.required],
      idNumber: ['', Validators.required],
      document: [null, Validators.required],
      locality: ['', Validators.required],
      landmark: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required]
    },
    {
      validators: [MustSelectGender('gender'), MustSelectId('idType')]
    });
  }
  get fetchValue() {
    return this.profileForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }
    console.log(this.fetchValue.document);
    this.userService.updateProfile(this.profileForm.value).subscribe( res => {
      console.log(res);
      this.profileForm.reset();
    },
    error => {
        this.error = error;
    });
    alert ('SUCCESS!!:-' + JSON.stringify(this.profileForm.value));
  }


  onFileChange(event) {
    console.log('Clicked');
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile, this.selectedFile.name);

    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);
    // tslint:disable-next-line: no-shadowed-variable
    reader.onload = (event: any) => {
      this.url = event.target.result;
    };
  }

  onUpload() {
    console.log('Clicked here');
    this.uploadData = new FormData();
    this.uploadData.append('document', this.selectedFile, this.selectedFile.name);
    console.log(this.uploadData.has('document'));
    this.userService.fileUpload(this.uploadData).subscribe( res => {
      console.log(res); // handle event here
    },
    error => {
      console.log(error);
    });
  }
}
