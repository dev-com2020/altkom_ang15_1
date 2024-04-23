import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  pure: false
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, currency: string): string {
    return `${value.toFixed(2)} ${currency}`
  }

}