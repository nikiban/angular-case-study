import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {
  @Output() timerTrigger = new EventEmitter();
  @Input() pausedAt: number[];
  @Input() counterStatus: { isStart: boolean, isReset: boolean };
  public showValidationError: boolean;
  public timerValue: number;

  constructor() { }

  ngOnInit(): void {
    this.showValidationError = false;
  }

  public timerOperation(type): void {
    let counterValue: number;
    if (this.timerValue && !isNaN(Number(this.timerValue))) {
      this.showValidationError = false;
      switch (type) {
        case 'start/pause': {
          this.counterStatus.isStart = !this.counterStatus.isStart;
          this.counterStatus.isReset = false;

          if (this.counterStatus.isStart) {
            if (this.pausedAt.length === 0) {
              counterValue = this.timerValue;
            } else {
              counterValue = this.pausedAt[this.pausedAt.length - 1];
            }
          }
          break;
        }
        case 'reset': {
          this.timerValue = 0;
          counterValue = this.timerValue;
          this.counterStatus.isStart = false;
          this.counterStatus.isReset = true;
          this.pausedAt = [];
          break;
        }
      }
      const data = {
        counterValue: Number(counterValue),
        isStart: this.counterStatus.isStart,
        isReset: this.counterStatus.isReset
      };
      if (!this.showValidationError) {
        this.timerTrigger.emit(data);
      }
    } else {
      this.showValidationError = true;
    }

  }

}
