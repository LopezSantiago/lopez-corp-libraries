import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialFormComponent } from './special-form.component';
import { MatButtonModule } from '@angular/material/button';
import { FormControlsListPipeModule } from '../../pipes/controls-list-pipe/controls-list.pipe.module';
import { ControlsRenderDirectiveModule } from '../../core/directives/control-render.module';
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
  SpecialLabelModule
} from '../../components';

@NgModule({
  declarations: [SpecialFormComponent],
  imports: [
    CommonModule,
    ControlsRenderDirectiveModule,
    FormControlsListPipeModule,
    MatButtonModule,
    SpecialDropdownModule,
    SpecialInputModule,
    SpecialAutocompleteModule,
    SpecialDatepickerModule,
    SpecialLabelModule,
    SpecialMultipleAutocompleteModule,
    SpecialCheckboxModule,
    SpecialTextAreaModule,
    SpecialUploadModule,
    SpecialArrayModule,
  ],
  exports: [SpecialFormComponent],
})
export class SpecialFormModule {}
