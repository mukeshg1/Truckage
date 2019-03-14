import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./truck.component.scss'],
  animations: [routerTransition()]
})
export class TruckComponent implements OnInit {
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


  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, {centered: true, backdropClass: 'light-blue-backdrop' });
  }

}