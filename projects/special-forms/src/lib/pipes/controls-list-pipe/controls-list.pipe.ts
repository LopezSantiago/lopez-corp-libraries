import { Pipe, PipeTransform } from '@angular/core';
import {
  SpecialFormControl,
  SpecialFormGroup,
} from '../../core/forms/special-forms';

@Pipe({ name: 'controlsList' })
export class FormControlsListPipe implements PipeTransform {
  transform(formGroup: SpecialFormGroup): SpecialFormControl<any>[] {
    return Object.values(formGroup.controls)
      .filter((control: SpecialFormControl<any>) => !control.hidden)
      .map((control) => control as SpecialFormControl<any>);
  }
}
