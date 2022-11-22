import { InputmaskOptions } from '@ngneat/input-mask';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { IFieldData } from '../../core/interfaces/field-basics.interfaces';

export type IInputSettings = {
  type?: string;
  mask?: InputmaskOptions<any>;
  icon?: string;
  iconAction?: (data: any) => void;
  onEnter?: (data: any) => void;
  onBlur?: (data: any) => void;
};

export interface IInputField extends IFieldData {
  settings: IInputSettings;
  type: EControlTypes.input;
}
