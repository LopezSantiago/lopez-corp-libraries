import {
  SpecialFormControl,
  SpecialFormArray,
  SpecialFormGroup,
} from '../forms/special-forms';

export abstract class ISpecialControl {
  control: SpecialFormControl<any> | SpecialFormArray | SpecialFormGroup;
}
