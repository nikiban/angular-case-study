import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-trigger-count',
  templateUrl: './counter-trigger-count.component.html',
  styleUrls: ['./counter-trigger-count.component.scss']
})
export class CounterTriggerCountComponent implements OnInit {
  @Input() countTriggers: { start: number, pause: number };
  constructor() { }

  ngOnInit(): void {
  }

}
