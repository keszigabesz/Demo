import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datarestructure'
})
export class DatarestructurePipe implements PipeTransform {

  transform(value: any[]): any[] {
    if (!Array.isArray(value)) return value

    return value.map(
    item => Object.values(item)
  )

}
}
