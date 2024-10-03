import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUnique'
})
export class FilterUniquePipe implements PipeTransform {

  transform(value: any[], property: string): any[] {
    if (!Array.isArray(value) || !property) {
      return value;
    }

    const uniqueItems = new Map<any, any>();
    value.forEach(item => {
      uniqueItems.set(item[property], item);
    });

    return Array.from(uniqueItems.values());
  }

}
