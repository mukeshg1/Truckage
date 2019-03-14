import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
  animations: [routerTransition()]
})
export class DriverComponent implements OnInit {
  driverImgSrc = 'assets/images/faces/face-2.jpg';
  driverName = 'Niraj Prasad';
  driverAbout = 'is from Jamshedpur, Jharkhand and can speak Hindi and English.';
  driverLicence = 'COMM9823E';

  constructor() { }

  ngOnInit() {
  }

}
