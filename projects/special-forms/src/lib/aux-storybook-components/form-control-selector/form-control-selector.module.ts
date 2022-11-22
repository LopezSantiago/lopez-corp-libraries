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
  SpecialArrayModule,
  SpecialLabelModule,
} from '../../components';
import { FormControlSelectorComponent } from './form-control-selector.component';
import { ControlsRenderDirectiveModule } from '../../core/directives/control-render.module';

@NgModule({
  declarations: [FormControlSelectorComponent],
  imports: [
    CommonModule,
    ControlsRenderDirectiveModule,
    SpecialMultipleAutocompleteModule,
    SpecialDatepickerModule,
    SpecialInputModule,
    SpecialDropdownModule,
    SpecialAutocompleteModule,
    SpecialCheckboxModule,
    SpecialTextAreaModule,
    SpecialUploadModule,
    SpecialArrayModule,
    SpecialLabelModule
  ],
  exports: [FormControlSelectorComponent],
})
export class FormControlSelectorModule {}
