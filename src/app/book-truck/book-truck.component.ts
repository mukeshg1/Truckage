import { Component, OnInit } from '@angular/core';

import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

import { routerTransition } from '../router.animations';
import { UserserviceService } from '../shared/services/userservice.service';

@Component({
  selector: 'app-book-truck',
  templateUrl: './book-truck.component.html',
  styleUrls: ['./book-truck.component.scss'],
  animations: [routerTransition()]
})
export class BookTruckComponent implements OnInit {
  dateStruct: NgbDateStruct;
  today;
  truckDetails = [];
  truckTypeList = ['--Select Truck Type--', 'Light Weight Truck', 'Medium Weight Truck', 'Heavy Weight Truck'];
  truckFoundError = false;

  constructor(
    private calendar: NgbCalendar,
    private userService: UserserviceService
  ) { }

  ngOnInit() {
    this.selectToday();
  }

  selectToday() {
    this.dateStruct = this.calendar.getToday();
    this.today = {year: this.dateStruct.year, month: this.dateStruct.month, day: this.dateStruct.day};
  }

  fetchTrucks() {
    this.truckDetails = [];
    this.userService.fetchTrucks().subscribe((data: any) => {
      if (data.error === true) {
        this.truckFoundError = true;
      } else {
        this.truckDetails = data.trucks;
        this.truckFoundError = false;
      }
    });
  }
}
