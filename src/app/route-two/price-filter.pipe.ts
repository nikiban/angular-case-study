import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(items: any[], key: string, filter: number): any {
    if (filter === 1) {
      items.sort((a, b): number => {
        return a[key] - b[key];
      });
    } else {
      items.sort((a, b): number => {
        return b[key] - a[key];
      });
    }
    return items;
  }

}
