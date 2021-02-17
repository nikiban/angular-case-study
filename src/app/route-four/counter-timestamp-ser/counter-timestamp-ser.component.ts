import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-timestamp-ser',
  templateUrl: './counter-timestamp-ser.component.html',
  styleUrls: ['./counter-timestamp-ser.component.scss']
})
export class CounterTimestampSerComponent implements OnInit, OnDestroy {
  public timeStampArray: string[];
  public updateSubs: Subscription;
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.timeStampArray = [];
    this.updateSubs = this.shareService.updateTimeStamp.subscribe((data: any) => {
      this.timeStampArray = data.timestampArray;
    });
  }

  ngOnDestroy(): void {
    this.updateSubs.unsubscribe();
  }
}
