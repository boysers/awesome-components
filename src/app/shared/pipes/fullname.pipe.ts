import { Pipe, PipeTransform } from '@angular/core';

interface Fullname {
  firstName: string;
  lastName: string;
}

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(
    { firstName, lastName }: Fullname,
    local: 'en' | 'fr' = 'fr'
  ): string {
    return local === 'fr'
      ? `${lastName.toUpperCase()} ${firstName}`
      : `${firstName} ${lastName}`;
  }
}
