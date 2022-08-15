import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(value: any[]): any {
    if (!Array.isArray(value)) return value
    return value.filter(
      item => {
        return item.featured;
      }
    )
  }

}
