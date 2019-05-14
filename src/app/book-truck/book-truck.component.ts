import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-book-truck',
  templateUrl: './book-truck.component.html',
  styleUrls: ['./book-truck.component.scss'],
  animations: [routerTransition()]
})
export class BookTruckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
