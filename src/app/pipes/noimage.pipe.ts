import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    if( value && value.length ){
      return value[0].url;
    }
    return 'assets/img/noimage.png';
  }

}
