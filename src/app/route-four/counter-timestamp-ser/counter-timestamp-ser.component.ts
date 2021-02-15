import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-counter-timestamp-ser',
  templateUrl: './counter-timestamp-ser.component.html',
  styleUrls: ['./counter-timestamp-ser.component.scss']
})
export class CounterTimestampSerComponent implements OnInit {
  public timeStampArray: string[];
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.timeStampArray = [];
    this.shareService.updateTimeStamp.subscribe((data: any) => {
      this.timeStampArray = data.timestampArray;
    });
  }
}
