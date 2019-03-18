import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./driver.component.scss'],
  animations: [routerTransition()]
})
export class DriverComponent implements OnInit {
  driverForm: FormGroup;
  submitted = false;
  drivers = 4;
  page = 1;
  size = 10;
  closeResult: string;

  driverDetails = [
    {
      driverName: 'Niraj Prasad',
      driverImgSrc: 'assets/images/faces/face-0.jpg',
      driverAbout: 'is from Jamshedpur, Jharkhand and can speak Hindi, English and Odia.',
      driverLicence: 'COMM9823E'
    },
    {
      driverName: 'Mohit Mahato',
      driverImgSrc: 'assets/images/faces/face-1.jpg',
      driverAbout: 'is from Jamshedpur, Jharkhand and can speak Hindi, English and Odia.',
      driverLicence: 'COMM9824E'
    },
    {
      driverName: 'Sachin Kumar',
      driverImgSrc: 'assets/images/faces/face-2.jpg',
      driverAbout: 'is from Bokaro, Jharkhand and can speak Hindi, English and Odia.',
      driverLicence: 'COMM9825E'
    },
    {
      driverName: 'Ashutosh Mohapatra',
      driverImgSrc: 'assets/images/faces/face-3.jpg',
      driverAbout: 'is from Jajpur, Odisha and can speak Hindi, English and Odia.',
      driverLicence: 'COMM9826E'
    }
  ];

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
  }

  ngOnInit() {
    this.driverForm = this.formBuilder.group({
      driverName: ['', Validators.required],
      driverLicenseNumber: ['', Validators.required],
      driverLicenseType: ['', Validators.required],
      licenseIssuedDate: ['', Validators.required],
      licenseExpiryDate: ['', Validators.required],
      driverLicense: [''],
      driverInsurance: ['']
    });
  }

  get f() {
    return this.driverForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // console.log('Data Submitted');
    if (this.driverForm.invalid) {
      return;
    }
    alert ('SUCCESS!!:-' + JSON.stringify(this.driverForm.value));
    // this.modalService.close('Submit');
  }

  openDriverDetailsModal(content) {
    this.modalService.open(content, {centered: true, backdropClass: 'light-blue-backdrop' });
  }

  openRegistrationModal(registration) {
    this.modalService.open(registration, {centered: true, size: 'lg', backdropClass: 'light-blue-backdrop' });
  }
}
