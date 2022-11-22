import { IAutocompleteField } from '../../components/special-autocomplete/special-autocomplete.interface';
import { IDatePickerField } from '../../components/special-datepicker/special-datepicker.interface';
import { IDropdownField } from '../../components/special-dropdown/special-dropdown.interface';
import { IInputField } from '../../components/special-input/special-input.interface';
import { ICheckboxField } from '../../components/special-checkbox/special-checkbox.interface';
import { IMultipleAutocompleteField } from '../../components/special-multiple-autocomplete/special-multiple-autocomplete.interface';
import { EControlTypes } from '../aux-data/control-types.enum';
import { IFieldData } from './field-basics.interfaces';
import { ITextAreaField } from '../../components/special-text-area/special-text-area.interface';
import { IUploadField } from '../../components/special-upload/special-upload.interface';
import { ILabelField } from '../../components/special-label/special-label.interface';

interface IcontrolName {
  name: string;
}

export type IFormSettings = {
  formFields: IFormStructure;
};

export interface IFormField extends IFieldData {
  settings: IFormSettings;
  type: EControlTypes.form;
}

export type IArraySettings = {
  formFields: IFormStructure;
  withFormHeader?: boolean;
};

export interface IArrayField extends IFieldData {
  settings: IArraySettings;
  type: EControlTypes.array;
}

export type TRawFields =
  | IInputField
  | IDropdownField
  | IArrayField
  | IFormField
  | IAutocompleteField
  | IMultipleAutocompleteField
  | IDatePickerField
  | ITextAreaField
  | IUploadField
  | ILabelField
  | ICheckboxField;

export type TSpecialInput = IInputField & IcontrolName;
export type TSpecialDropdown = IDropdownField & IcontrolName;
export type TSpecialArray = IArrayField & IcontrolName;
export type TSpecialForm = IFormField & IcontrolName;
export type TSpecialAutocomplete = IAutocompleteField & IcontrolName;
export type TSpecialDatepicker = IDatePickerField & IcontrolName;
export type ISpecialCheckbox = ICheckboxField & IcontrolName;
export type ISpecialTextArea = ITextAreaField & IcontrolName;
export type ISpecialLabel = ILabelField & IcontrolName;
export type ISpecialUpload = IUploadField & IcontrolName;

export type TSpecialFields =
  | TSpecialInput
  | TSpecialDropdown
  | TSpecialArray
  | TSpecialForm
  | TSpecialAutocomplete
  | ISpecialCheckbox
  | ISpecialTextArea
  | ISpecialUpload
  | ISpecialLabel
  | TSpecialDatepicker;

export interface IFormStructure {
  [name: string]: Partial<TRawFields>;
}
