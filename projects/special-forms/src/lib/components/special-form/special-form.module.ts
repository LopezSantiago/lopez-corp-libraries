import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControlsRenderDirective,
  SpecialFormComponent,
  SpecialArrayComponent,
} from './special-form.component';
import { MatButtonModule } from '@angular/material/button';
import { FormControlsListPipeModule } from '../../pipes/controls-list-pipe/controls-list.pipe.module';
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
} from '../../components';

@NgModule({
  declarations: [
    SpecialArrayComponent,
    FormControlsRenderDirective,
    SpecialFormComponent,
  ],
  imports: [
    CommonModule,
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
  ],
  exports: [
    SpecialArrayComponent,
    FormControlsRenderDirective,
    SpecialFormComponent,
  ],
})
export class SpecialFormModule {}
