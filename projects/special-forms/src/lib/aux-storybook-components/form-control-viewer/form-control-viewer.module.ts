import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlViewerComponent } from './form-control-viewer.component';
import { SpecialFormBuilderService } from '../../core/services';
import {
  SpecialDropdownModule,
  SpecialInputModule,
  SpecialAutocompleteModule,
} from '../../components';

@NgModule({
  declarations: [FormControlViewerComponent],
  imports: [
    CommonModule,
    SpecialInputModule,
    SpecialDropdownModule,
    SpecialAutocompleteModule,
  ],
  exports: [FormControlViewerComponent],
  providers: [SpecialFormBuilderService],
})
export class FormControlViewerModule {}
