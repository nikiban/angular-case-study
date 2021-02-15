import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-counter-display-ser',
  templateUrl: './counter-display-ser.component.html',
  styleUrls: ['./counter-display-ser.component.scss']
})
export class CounterDisplaySerComponent implements OnInit {
  public timerValue: number;
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.timerValue = 0;
    this.shareService.isStart.subscribe((data: any) => {
      this.timerValue = data.counterValue;
    });
    this.shareService.isReset.subscribe((data: any) => {
      this.timerValue = data.counterValue;
    });
  }

}
