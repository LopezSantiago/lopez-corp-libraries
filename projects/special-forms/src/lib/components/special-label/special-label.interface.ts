import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { IFieldData } from '../../core/interfaces/field-basics.interfaces';

export type ILabelSettings = {
  pipe?: (value) => string;
  stylesPipe?: (value) => string;
  isLink: boolean;
  onClickLink?: (value) => void;
};

export interface ILabelField extends IFieldData {
  settings: ILabelSettings;
  type: EControlTypes.label;
}
