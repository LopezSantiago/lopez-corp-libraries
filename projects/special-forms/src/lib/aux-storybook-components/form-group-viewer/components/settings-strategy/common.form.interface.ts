import { IAutocompleteSettings } from '@lib/components/special-autocomplete/special-autocomplete.interface';
import { ICheckboxSettings } from '@lib/components/special-checkbox/special-checkbox.interface';
import { IDatePickerSettings } from '@lib/components/special-datepicker/special-datepicker.interface';
import { IDropdownSettings } from '@lib/components/special-dropdown/special-dropdown.interface';
import { IInputSettings } from '@lib/components/special-input/special-input.interface';
import { ILabelSettings } from '@lib/components/special-label/special-label.interface';
import { ITextAreaSettings } from '@lib/components/special-text-area/special-text-area.interface';
import { IUploadSettings } from '@lib/components/special-upload/special-upload.interface';
import { IFormStructure } from '@lib/core/interfaces/form.interfaces';

export type AllControlSettings =
  | ICheckboxSettings
  | IDropdownSettings
  | IInputSettings
  | IDatePickerSettings
  | ILabelSettings
  | IUploadSettings
  | ITextAreaSettings
  | IAutocompleteSettings;

export interface CommonFormCreator {
  settingsFields?(): IFormStructure;
  getSettings(data: any): AllControlSettings;
}
