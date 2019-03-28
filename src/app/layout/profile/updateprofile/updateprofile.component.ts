import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustSelectGender, MustSelectId } from '../../../shared/helpers/select-type.validator';
import { UserserviceService } from '../../../shared/services/userservice.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent implements OnInit {
  profileForm: FormGroup;
  error = '';
  uploadData: FormData;
  uploadPercent = 0;
  selectedFile: File;

  Gender: string[] = ['--Select Gender--', 'Male', 'Female'];

  idType: string[] = ['--Select Id Type--', 'Aadhar Card', 'Voter Card', 'PAN Card', 'Passport'];

  constructor(private formBuilder: FormBuilder,
    private userService: UserserviceService) { }

  ngOnInit() {
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
    this.setValue();
  }
  get fetchValue() {
    return this.profileForm.controls;
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      return;
    }
    this.userService.updateProfile(this.profileForm.value).subscribe( (res: any) => {
      console.log(res);
    },
    error => {
        this.error = error;
    });
  }

  // Upload file and send it to backend
  onFileChange(event) {
    this.selectedFile = <File>event.target.files[0];
    this.uploadData = new FormData();
    this.uploadData.append('document', this.selectedFile, this.selectedFile.name);
    this.uploadData.append('documentType', 'AadharCard');
    console.log(this.uploadData.has('document'));
    this.userService.fileUpload(this.uploadData).subscribe( res => {
      console.log(res); // handle event here
    },
    error => {
      console.log(error);
    });
  }

  setValue() {
    this.profileForm.patchValue({
      companyName: 'Mindfire',
      gender: 'Male',
      dob: '',
      mobileNumber: '1234567890',
      idType: 'Aadhar Card',
      idNumber: 'sdsd122',
      document: null,
      locality: 'bbsr',
      landmark: 'dlf ',
      city: 'bbsr',
      country: 'India',
      postalCode: '1212'
    });
  }
}
