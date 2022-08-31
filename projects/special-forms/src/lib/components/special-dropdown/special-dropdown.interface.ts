import { Observable } from 'rxjs';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { IFieldData } from '../../core/interfaces/field-basics.interfaces';

export type IDropdownSettings = {
  source: Observable<any[]>;
  fieldId: string;
  fieldName: string | ((a?: any) => string);
  notSelectedText?: string;
};

export interface IDropdownField extends IFieldData {
  settings: IDropdownSettings;
  type: EControlTypes.dropdown;
}
