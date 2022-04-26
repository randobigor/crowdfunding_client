import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ruProjectTm'
})
export class RuProjectTmPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value) {
      let date: Date = new Date(value.toString());
      let day = date.getDay();
      let year = date.getFullYear();
      let month = null;
      switch (date.getMonth()) {
        case 0: month = 'января'; break;
        case 1: month = 'февраля'; break;
        case 2: month = 'марта'; break;
        case 3: month = 'апреля'; break;
        case 4: month = 'мая'; break;
        case 5: month = 'июня'; break;
        case 6: month = 'июля'; break;
        case 7: month = 'августа'; break;
        case 8: month = 'сентября'; break;
        case 9: month = 'октября'; break;
        case 10: month = 'ноября'; break;
        case 11: month = 'декабря'; break;
      }

      return `${day}-го ${month}, ${year}`;
    }
    return null;
  }
}
