import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.scss']
})

export class RouteOneComponent implements OnInit {
  public counter: number;
  public title: string;
  constructor() { }

  ngOnInit(): void {
    this.counter = 10;
    this.title = 'Lorem Ipsum is simply dummy text of the printing';
  }

}
