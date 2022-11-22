import { Observable } from 'rxjs';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { IFieldData } from '../../core/interfaces/field-basics.interfaces';

export type IDropdownSettings = {
  icon?: string;
  onSelect?: (data: any) => void;
  iconAction?: (data: any) => void;
  source: Observable<any[]>;
  fieldId: string;
  fieldName: string | ((a?: any) => string);
  notSelectedText?: string;
};

export interface IDropdownField extends IFieldData {
  settings: IDropdownSettings;
  type: EControlTypes.dropdown;
}
