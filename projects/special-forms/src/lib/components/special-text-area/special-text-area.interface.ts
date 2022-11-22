import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { IFieldData } from '../../core/interfaces/field-basics.interfaces';

export type ITextAreaSettings = {};

export interface ITextAreaField extends IFieldData {
  settings: ITextAreaSettings;
  type: EControlTypes.textArea;
}
