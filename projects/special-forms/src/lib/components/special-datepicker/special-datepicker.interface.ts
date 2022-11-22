import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { IFieldData } from '../../core/interfaces/field-basics.interfaces';

export type IDatePickerSettings = {
  lowerLimit?: number;
  upperLimit?: number;
  startAt?: Date;
};

export interface IDatePickerField extends IFieldData {
  settings: IDatePickerSettings;
  type: EControlTypes.date;
}
