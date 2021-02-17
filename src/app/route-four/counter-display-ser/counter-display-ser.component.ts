import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-counter-display-ser',
  templateUrl: './counter-display-ser.component.html',
  styleUrls: ['./counter-display-ser.component.scss']
})
export class CounterDisplaySerComponent implements OnInit, OnDestroy {
  public timerValue: number;
  public startSubs: Subscription;
  public resetSubs: Subscription;
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.timerValue = 0;
    this.startSubs = this.shareService.isStart.subscribe((data: any) => {
      this.timerValue = data.counterValue;
    });
    this.resetSubs = this.shareService.isReset.subscribe((data: any) => {
      this.timerValue = data.counterValue;
    });
  }

  ngOnDestroy(): void {
    this.startSubs.unsubscribe();
    this.resetSubs.unsubscribe();
  }

}
