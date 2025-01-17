import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {

  transform(value: string, countryCode: string = ''): string {
    if (!value) {
      return value;
    }

    let formattedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    return (countryCode) ? `+${countryCode} ${formattedValue}` : formattedValue;
  }
}
