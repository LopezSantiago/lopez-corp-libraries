import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'textByFunction' })
export class TextByFunctionPipe implements PipeTransform {
  transform(value: any, field: string | ((value: any) => string)): any {
    if (field instanceof Function) {
      return field(value);
    } else {
      return value[field];
    }
  }
}
