import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe<T extends {[key: string]: any}> implements PipeTransform {

  transform(value: T[], key: string, desc: boolean = false): T[] {
    if (Array.isArray(value) !== true || typeof key !== "string") {
      return value;
    }

    return value.sort((a, b) => {
      let comparableA: any = a[key];
      let comparableB: any = b[key];

      if (typeof comparableA === 'boolean' && typeof comparableB === 'boolean') {
        comparableA = comparableA ? 1 : 0;
        comparableB = comparableB ? 1 : 0;
      }
      if (desc) {
        [comparableA, comparableB] = [comparableB, comparableA];
      }

      if (typeof comparableA === 'number' && typeof comparableB === 'number') {
        return comparableA - comparableB;
      }
      return String(comparableA).toLocaleLowerCase().localeCompare(String(comparableB).toLocaleLowerCase());
    });


  }

}

