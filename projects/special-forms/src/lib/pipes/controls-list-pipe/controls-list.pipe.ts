import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {
  SpecialFormControl,
} from '../../core/forms/special-forms';

@Pipe({ name: 'controlsList' })
export class FormControlsListPipe implements PipeTransform {
  transform(controls: {
    [key: string]: AbstractControl;
  }): SpecialFormControl<any>[] {
    if (!controls) return [];
    return Object.values(controls)
      .filter((control: SpecialFormControl<any>) => !control.hidden)
      .map((control) => control as SpecialFormControl<any>);
  }
}
