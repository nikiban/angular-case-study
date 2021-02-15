import { Component, OnInit } from '@angular/core';

interface TimeObj {
  status: string;
  date: Date;
}

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.scss']
})
export class RouteThreeComponent implements OnInit {
  public counter: number;
  public timeStampArray: TimeObj[];
  public countTriggers: { start: number, pause: number };
  public counterStatus: { isStart: boolean, isReset: boolean };
  public pausedAt: number[];
  public timerInterval;

  constructor() { }

  ngOnInit(): void {
    this.counter = 0;
    this.pausedAt = [];
    this.timeStampArray = [];
    this.counterStatus = { isStart: false, isReset: false };
    this.countTriggers = { start: 0, pause: 0 };
  }

  public timerOperations(event): void {
    if (!isNaN(event.counterValue)) {
      this.counter = event.counterValue;
    }
    if (!event.isReset && event.isStart && event.counterValue > 0) { // when start button clicked
      this.timerInterval = setInterval(() => {
        this.counter = this.counter - 1;
        if (this.counter < 1) { // when counter reaches 0
          clearInterval(this.timerInterval);
          this.counterStatus.isStart = false;
          this.pausedAt = [];
          this.timeStampArray = [];
          this.countTriggers = { start: 0, pause: 0 };
        }
      }, 1000);
    } else if (event.isReset || !event.isStart) { // When paused or reset button clicked
      clearInterval(this.timerInterval);
      if (!event.isStart && !event.isReset) { // if paused
        this.pausedAt.push(this.counter);
      } else { // if reset
        this.pausedAt = [];
        this.timeStampArray = [];
        this.countTriggers = { start: 0, pause: 0 };
      }
    }
    if (!event.isReset) { // to set timestamps array
      this.setTimeStamps();
    }

  }

  public setTimeStamps(): void {
    const newDate = new Date();
    if (this.counterStatus.isStart) {
      this.countTriggers.start++;
      this.timeStampArray.push({status: 'Started at', date: newDate});
    } else {
      this.countTriggers.pause++;
      this.timeStampArray.push({status: 'Paused at', date: newDate});
    }
  }

}
