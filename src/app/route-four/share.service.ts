import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public isStart = new Subject();
  public isReset = new Subject();
  public counterStatus: { isStart: boolean, isReset: boolean };
  public countTriggers: { start: number, pause: number };
  public counterValue: number;
  public pausedAt: number[];
  public timeStampArray: string[];
  public updateTimeStamp = new Subject();
  public timerInterval;
  constructor() {
    this.counterValue = 0;
    this.pausedAt = [];
    this.timeStampArray = [];
    this.counterStatus = { isStart: false, isReset: false };
    this.countTriggers = { start: 0, pause: 0 };
  }

  public timerTriggers(data): void {
    if (data.isReset) { // when reset
      this.counterValue = data.counterValue;
      this.pausedAt = [];
      this.timeStampArray = [];
      this.countTriggers = { start: 0, pause: 0 };
      this.isReset.next({ counterValue: this.counterValue });
      this.updateTimeStamp.next({ timestampArray: this.timeStampArray, counterTriggers: this.countTriggers });
    } else {
      if (data.isStart) { // when start
        if (this.pausedAt.length === 0) {
          this.counterValue = data.counterValue;
        } else {
          this.counterValue = this.pausedAt[this.pausedAt.length - 1];
        }
        // timer logic
        this.timerInterval = setInterval(() => {
          this.isStart.next({ counterValue: this.counterValue });
          if (this.counterValue > 0) {
            this.counterValue--;
          } else {
            this.counterStatus.isStart = false;
            this.pausedAt = [];
            this.timeStampArray = [];
            this.countTriggers = { start: 0, pause: 0 };
            clearInterval(this.timerInterval);
          }
        }, 1000);
      } else { // when paused
        this.pausedAt.push(this.counterValue);
        this.isStart.next({ counterValue: this.counterValue });
        clearInterval(this.timerInterval);
      }
      this.setTimeStamps();
    }
  }

  public setTimeStamps(): void {
    const date = new Date();
    const dateFormate = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    if (this.counterStatus.isStart) {
      this.countTriggers.start++;
      this.timeStampArray.push(`Started at ${dateFormate}`);
    } else {
      this.countTriggers.pause++;
      this.timeStampArray.push(`Paused at ${dateFormate}`);
    }
    this.updateTimeStamp.next({ timestampArray: this.timeStampArray, counterTriggers: this.countTriggers });
  }
}
