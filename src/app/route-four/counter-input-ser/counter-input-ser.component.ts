import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-counter-input-ser',
  templateUrl: './counter-input-ser.component.html',
  styleUrls: ['./counter-input-ser.component.scss']
})
export class CounterInputSerComponent implements OnInit {
  public showValidationError: boolean;
  public timerValue: number;
  public pausedAt: number[];
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.showValidationError = false;
    this.pausedAt = [];
  }

  public timerOperation(type): void {

    if (this.timerValue && !isNaN(Number(this.timerValue))) { // for valid input
      this.showValidationError = false;
      switch (type) {
        case 'start/pause': {
          this.shareService.counterStatus.isStart = !this.shareService.counterStatus.isStart;
          this.shareService.counterStatus.isReset = false;
          break;
        }
        case 'reset': {
          this.timerValue = 0;
          this.shareService.counterStatus.isStart = false;
          this.shareService.counterStatus.isReset = true;
          break;
        }
      }
      setTimeout(() => {
        this.pausedAt = this.shareService.pausedAt.slice();
      }, 10);
      const data = {
        counterValue: Number(this.timerValue),
        isStart: this.shareService.counterStatus.isStart,
        isReset: this.shareService.counterStatus.isReset
      };
      this.shareService.timerTriggers(data);
    } else { // for invalid input
      this.showValidationError = true;
    }

  }

}
