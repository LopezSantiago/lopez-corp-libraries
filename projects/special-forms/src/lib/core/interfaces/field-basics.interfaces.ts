import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export interface IFieldBasicData {
  placeholder: string;
  label: string;
  tooltip: string;
  icon: string;
  elementId: string;
  styleClasses: string;
  length: number;
  required: boolean;
  hidden: boolean;
  readOnly: boolean;
  theme: 'dark' | 'light';
  errorMessages: { [key: string]: string };
}

export interface IFieldData extends IFieldBasicData {
  validators: ValidatorFn | ValidatorFn[] | null;
  asyncValidators: AsyncValidatorFn | AsyncValidatorFn[] | null;
  defaultValue: any;
}
