import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.scss']
})
export class RouteSixComponent implements OnInit {
  public dynamicData: number[];
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY + 15) >= document.body.offsetHeight) {
      const count = Math.floor((document.getElementById('dynamicParentId').offsetWidth) / 200) * 2;
      for (let i = 0; i < count; i++) {
        this.dynamicData.push(this.dynamicData.length);
      }
    }
  }

  ngOnInit(): void {
    this.dynamicData = Array.from(Array(20), (_, i) => i + 1);
  }

  public showAlert(item): void {
    alert(`Button '${item}' is clicked!`);
  }

}
