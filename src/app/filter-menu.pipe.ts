import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './Item';

@Pipe({
  name: 'filterMenu',
})
export class FilterMenuPipe implements PipeTransform {
  transform(object: Item[], query: 'listed' | 'happyHour'): Item[] {
    if (!query) return object;
    return object.filter((item) => item[query]);
  }
}
