import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  result = '';
  transform(value: any, args?: any): any {
    if (value && value !== undefined) {
      value = value.toLowerCase();
      const words = value.split(' ');

      for (let i in words) {
        words[i]= words[i][0].toUpperCase()+words[i].substring(1);
      }

      this.result = words.join(' ');
    }
    return this.result;
  }
}
