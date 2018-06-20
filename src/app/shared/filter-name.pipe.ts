import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    let output = [];
    if ( value === null || filterString === '' ) {
      return value;
    }
    if ( value.length === 0 || filterString === '' ) {
      return value;
    }
    for ( const item of value) {
      if (item['name'].includes(filterString)) {
        output.push(item);
      }
    }
    return output;
  }
}
