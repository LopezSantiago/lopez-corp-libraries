import { InputmaskOptions } from '@ngneat/input-mask';
import { EControlTypes } from '../../core/enums/control-types.enum';
import { IFieldData } from '../../core/interfaces/field-basics.interfaces';

export type IInputSettings = {
  type?: string;
  icon?: string;
  mask?: InputmaskOptions<any>;
};

export interface IInputField extends IFieldData {
  settings: IInputSettings;
  type: EControlTypes.input;
}
