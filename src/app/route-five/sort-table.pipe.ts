import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTable'
})
export class SortTablePipe implements PipeTransform {

  transform(items: any[], direction: number, key: string, type: string): any {
    let sortedArray = items.slice();
    if (direction === 0) {
      if (type === 'number') {
        sortedArray.sort((a, b): number => {
          return a[key] - b[key];
        });
      } else {
        sortedArray = this.sortStrings(sortedArray, key);
      }
    } else if (direction === 1) {
      if (type === 'number') {
        sortedArray.sort((a, b): number => {
          return b[key] - a[key];
        });
      } else {
        sortedArray = this.sortStrings(sortedArray, key);
        sortedArray.reverse();
      }
    }
    return sortedArray;
  }

  public sortStrings(array, key): Array<any> {
    array.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
    return array;
  }
}
