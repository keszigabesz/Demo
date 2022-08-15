import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstFew'
})
export class FirstFewPipe implements PipeTransform {

  transform(value: any[], numberOfItems:number): any {
    if (!Array.isArray(value) || !numberOfItems) return value;
    return value.slice(0,numberOfItems);
  }

}
