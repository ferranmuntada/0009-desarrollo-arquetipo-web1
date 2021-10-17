import { Pipe, PipeTransform } from '@angular/core';
import { IClientInterface } from '../interfaces/client.interface';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {
/**
 *
 * @param items list of IClientInterface
 * @param searchText text to filter
 */
  transform(items: IClientInterface[], searchText: string): IClientInterface[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      const data = it.name.toLocaleLowerCase().includes(searchText)
        || it.lastname.toLocaleLowerCase().includes(searchText)
        || it.type.toLocaleLowerCase().includes(searchText)
        || it.email.toLocaleLowerCase().includes(searchText);
      return data;
    });
  }
}
