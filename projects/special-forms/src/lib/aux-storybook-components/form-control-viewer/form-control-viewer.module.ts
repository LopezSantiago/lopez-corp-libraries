import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlViewerComponent } from './form-control-viewer.component';
import { SpecialFormBuilderService } from '../../core/services';
import { FormControlSelectorModule } from '../form-control-selector/form-control-selector.module';

@NgModule({
  declarations: [FormControlViewerComponent],
  imports: [
    CommonModule,
    FormControlSelectorModule
  ],
  exports: [FormControlViewerComponent],
  providers: [SpecialFormBuilderService],
})
export class FormControlViewerModule {}
