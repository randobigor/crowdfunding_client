import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mdlCurrency'
})
export class MdlCurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + ' лей';
  }

}
