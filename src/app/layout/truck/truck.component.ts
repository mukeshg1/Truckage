import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./truck.component.scss'],
  animations: [routerTransition()]
})
export class TruckComponent implements OnInit {
  truckForm: FormGroup;
  submitted = false;
  trucks = 4;
  page = 1;
  size = 10;
  closeResult: string;

  truckDetails = [
    {
      truckName: 'Heavy Weight Truck',
      truckImgSrc: 'assets/images/trucks/truck-0.jpg',
      truckAbout: 'It was manufactured in 2005 A.D. and has completed over 100 trips; total of 19,000 K.M.',
      truckLicence: 'COMM9823E'
    },
    {
      truckName: 'Light weight Truck',
      truckImgSrc: 'assets/images/trucks/truck-1.jpg',
      truckAbout: 'It was manufactured in 2009 A.D. and has completed over 70 trips; total of 14,000 K.M.',
      truckLicence: 'COMM9824E'
    },
    {
      truckName: 'Tripper Truck',
      truckImgSrc: 'assets/images/trucks/truck-2.jpg',
      truckAbout: 'It was manufactured in 2001 A.D. and has completed over 100 trips; total of 19,000 K.M.',
      truckLicence: 'COMM9825E'
    },
    {
      truckName: 'Medium Weight Truck',
      truckImgSrc: 'assets/images/trucks/truck-0.jpg',
      truckAbout: 'It was manufactured in 2015 A.D. and has completed over 100 trips; total of 19,000 K.M.',
      truckLicence: 'COMM9826E'
    }
  ];


  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
  }

  ngOnInit() {
    this.truckForm = this.formBuilder.group({
      truckType: ['', Validators.required],
      truckManufacturedDate: ['', Validators.required],
      licensePlateNumber: ['', Validators.required],
      registrationCertificate: ['', Validators.required],
      insuranceDocument: ['', Validators.required],
      pollutionDocument: ['', Validators.required]
    });
  }

  get f() {
    return this.truckForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // console.log('Data Submitted');
    if (this.truckForm.invalid) {
      return;
    }
    alert ('SUCCESS!!:-' + JSON.stringify(this.truckForm.value));
    console.log('Added');
  }

  openTruckDetailsModal(content) {
    this.modalService.open(content, {centered: true, backdropClass: 'light-blue-backdrop' });
  }
  openRegistrationModal(registration) {
    this.modalService.open(registration, {centered: true, size: 'lg', backdropClass: 'light-blue-backdrop' });
  }

}
