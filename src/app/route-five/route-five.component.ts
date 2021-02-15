import { Component, OnInit } from '@angular/core';

interface StudentData {
  name: string;
  class: number;
  section: string;
  maths: number;
  science: number;
  english: number;
}

@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.scss']
})
export class RouteFiveComponent implements OnInit {
  public tableData: StudentData[];
  public tableHeader;
  public activeFilter: { column: string, direction: number, type: string };
  constructor() { }

  ngOnInit(): void {
    this.tableData = [];
    this.tableHeader = [];
    this.activeFilter = { column: '', direction: 0, type: '' };
    this.initializeTable();
  }

  public initializeTable(): void {
    for (let i = 0; i < 10; i++) {
      this.tableData.push({
        name: `name${Math.floor((Math.random() * 10) + 1)}`,
        class: Math.floor((Math.random() * 10) + 1),
        section: String.fromCharCode(65 + Math.floor((Math.random() * 5) + 1)),
        maths: Math.floor((Math.random() * 100) + 1),
        science: Math.floor((Math.random() * 100) + 1),
        english: Math.floor((Math.random() * 100) + 1)
      });
    }
    Object.keys(this.tableData[0]).map((item) => {
      this.tableHeader.push({ key: item, type: typeof this.tableData[0][item] });
    });
  }

  public sortTable(column): void {
    if (this.activeFilter.column !== column.key) {
      this.activeFilter.direction = 0;
    } else {
      this.activeFilter.direction = (this.activeFilter.direction + 1) % 3;
    }
    this.activeFilter.type = column.type;
    this.activeFilter.column = column.key;
  }

}
