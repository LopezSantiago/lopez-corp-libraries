import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { IFieldData } from '../../core/interfaces/field-basics.interfaces';

export type ICheckboxSettings = {
  labelPosition?: 'before' | 'after';
  indeterminate?:boolean
};

export interface ICheckboxField extends IFieldData {
  settings: ICheckboxSettings;
  type: EControlTypes.checkbox;
}
