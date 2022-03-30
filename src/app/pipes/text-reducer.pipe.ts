import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReducer'
})
export class TextReducerPipe implements PipeTransform {
  private a: any;

  transform(value: unknown, ...args: unknown[]): unknown {
    return String(value).substring(0, 160) + '...';
  }

}
