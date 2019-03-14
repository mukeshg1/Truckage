import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.scss'],
  animations: [routerTransition()]
})
export class TruckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
