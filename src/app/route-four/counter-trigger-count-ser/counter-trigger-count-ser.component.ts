import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-trigger-count-ser',
  templateUrl: './counter-trigger-count-ser.component.html',
  styleUrls: ['./counter-trigger-count-ser.component.scss']
})
export class CounterTriggerCountSerComponent implements OnInit, OnDestroy {
  public countTriggers: { start: number, pause: number };
  public updateSubs: Subscription;
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.countTriggers = { start: 0, pause: 0 };
    this.shareService.updateTimeStamp.subscribe((data: any) => {
      this.countTriggers = data.counterTriggers;
    });
  }

  ngOnDestroy(): void {
    this.updateSubs.unsubscribe();
  }

}
