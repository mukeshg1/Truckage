import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./driver.component.scss'],
  animations: [routerTransition()]
})
export class DriverComponent implements OnInit {
  page = 1;
  size = 10;
  closeResult: string;

  driverImgSrc = 'assets/images/faces/face-2.jpg';
  driverName = 'Niraj Prasad';
  driverAbout = 'is from Jamshedpur, Jharkhand and can speak Hindi, English and Odia.';
  driverLicence = 'COMM9823E';

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, {centered: true, backdropClass: 'light-blue-backdrop' });
  }
}
