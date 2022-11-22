import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { IFieldData } from '../../core/interfaces/field-basics.interfaces';

export type IAutocompleteSettings = {
  getData: (query: string, control?: AbstractControl) => void;
  source: Observable<any[]>;
  fieldId: string;
  icon?: string;
  iconAction?: (data: any) => void;
  onSelect?: (data: any) => void;
  fieldName: string | ((a?: any) => string);
  fieldImage?: string | ((a?: any) => string);
};

export interface IAutocompleteField extends IFieldData {
  settings: IAutocompleteSettings;
  type: EControlTypes.autocomplete;
}
