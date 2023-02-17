import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SpecialDropdownModule,
  SpecialInputModule,
  SpecialAutocompleteModule,
  SpecialDatepickerModule,
  SpecialMultipleAutocompleteModule,
  SpecialCheckboxModule,
  SpecialTextAreaModule,
  SpecialUploadModule,
  SpecialLabelModule,
  SpecialFormModule,
} from '../../components';
import { FormControlSelectorComponent } from './form-control-selector.component';

@NgModule({
  declarations: [FormControlSelectorComponent],
  imports: [
    SpecialFormModule,
    CommonModule,
    SpecialMultipleAutocompleteModule,
    SpecialDatepickerModule,
    SpecialInputModule,
    SpecialDropdownModule,
    SpecialAutocompleteModule,
    SpecialCheckboxModule,
    SpecialTextAreaModule,
    SpecialUploadModule,
    SpecialLabelModule
  ],
  exports: [FormControlSelectorComponent],
})
export class FormControlSelectorModule {}
