import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe<T> implements PipeTransform {
  transform(value: T[], phrase: string, key: string = ''): T[] {
    if (!Array.isArray(value) || !phrase || !key) return value
    return value.filter(
      item => {
        return item[key]
          .toString().toLowerCase()
          .includes(phrase.toLowerCase()) ? true : false
      }
    )
  }
}
