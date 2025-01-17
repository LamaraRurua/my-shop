import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems',
  standalone: true,
  pure: false // This make the pipe impure
})
export class FilterItemsPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    return items.filter((item) => {
      return item.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
