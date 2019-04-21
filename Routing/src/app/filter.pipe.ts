


import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(Mobile: any[], searchText: string): any[] {
    if(!Mobile) return [];
    if(!searchText) return Mobile;
searchText = searchText.toLowerCase();
return Mobile.filter( it => {
      console.log("it is",it);
      return it.description.includes(searchText);
    });
   }
}