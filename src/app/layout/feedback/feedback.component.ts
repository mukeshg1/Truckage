import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  animations: [routerTransition()]
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
