import { IDropdownField } from '../../components/special-dropdown/special-dropdown.interface';
import { IInputField } from '../../components/special-input/special-input.interface';
import { EControlTypes } from '../enums/control-types.enum';
import { IFieldData } from './field-basics.interfaces';

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
};

export interface IArrayField extends IFieldData {
  settings: IArraySettings;
  type: EControlTypes.array;
}

export type TRawFields =
  | IInputField
  | IDropdownField
  | IArrayField
  | IFormField;
// | TextControlFieldModel
// | PhoneControlFieldModel
// | LongTextControlFieldModel
// | DropdownControlFieldModel
// | AutocompleteControlFieldModel
// | ArrayControlFieldModel
// | BooleanControlFieldModel
// | DateControlFieldModel
// | MaskControlFieldModel
// | FileControlModel
// | ReadOnlyControlFieldModel
// | PkeyControlFieldModel
// | AuxFieldModel;
export type TSpecialInput = IInputField & IcontrolName;
export type TSpecialDropdown = IDropdownField & IcontrolName;
export type TSpecialArray = IArrayField & IcontrolName;
export type TSpecialForm = IFormField & IcontrolName;

export type TSpecialFields =
  | TSpecialInput
  | TSpecialDropdown
  | TSpecialArray
  | TSpecialForm;

export interface IFormStructure {
  [name: string]: Partial<TRawFields>;
}
