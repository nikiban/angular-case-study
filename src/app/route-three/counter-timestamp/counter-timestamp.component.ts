import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-timestamp',
  templateUrl: './counter-timestamp.component.html',
  styleUrls: ['./counter-timestamp.component.scss']
})
export class CounterTimestampComponent implements OnInit {
  @Input() timeStampArray: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
