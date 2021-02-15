import { Component, OnInit } from '@angular/core';
import { PriceFilterStructure, ProductStructure } from './product-structure';

@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.scss']
})
export class RouteTwoComponent implements OnInit {
  public productList: ProductStructure[];
  public priceFilter: { list: PriceFilterStructure[], activeFilter: PriceFilterStructure };
  public activeView: string;
  public showDropDown: boolean;
  constructor() { }

  ngOnInit(): void {
    this.activeView = 'grid';
    this.productList = [];
    this.showDropDown = false;
    this.priceFilter = {
      list: [
        { filterDesp: 'Price Low to High', value: 1 },
        { filterDesp: 'Price High to Low', value: -1 }
      ],
      activeFilter: { filterDesp: 'Price Low to High', value: 1 }
    };
    this.initializeProductList();
  }

  public initializeProductList(): void {
    for (let i = 0; i < 40; i++) {
      this.productList.push({
        uniqueId: i + 1,
        productName: `Sample Product ${i}`,
        price: Math.floor((Math.random() * 100) + 1)
      });
    }
  }

  public changeView(view): void {
    this.activeView = view;
  }

  public selectFilter(item): void {
    this.priceFilter.activeFilter = item;
    this.showDropDown = false;
  }


}
