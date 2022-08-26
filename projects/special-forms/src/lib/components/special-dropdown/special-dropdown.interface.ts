import { Observable } from 'rxjs';
import { EControlTypes } from '../../core/enums/control-types.enum';
import { IFieldData } from '../../core/interfaces/field-basics.interfaces';

export type IDropdownSettings = {
  source: Observable<any[]>;
  fieldId: string;
  fieldName: string | ((a?: any) => string);
};

export interface IDropdownField extends IFieldData {
  settings: IDropdownSettings;
  type: EControlTypes.dropdown;
}
