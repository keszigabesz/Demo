import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(value: any[]): any {
    if (!Array.isArray(value)) return value;

    for (let i = value.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = value[i];
      value[i] = value[j];
      value[j] = temp;
    }

    return value;
  }

}
