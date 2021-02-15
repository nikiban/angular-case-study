import { Component, Input, OnInit } from '@angular/core';
import { ProductStructure } from '../product-structure';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: ProductStructure;
  @Input() isGridView: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
