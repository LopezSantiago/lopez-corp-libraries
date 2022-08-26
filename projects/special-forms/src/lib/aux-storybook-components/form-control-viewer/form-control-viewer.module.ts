import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlViewerComponent } from './form-control-viewer.component';
import { SpecialFormBuilderService } from '../../core/services';
import { SpecialInputModule } from '../../components/special-input/special-input.module';

@NgModule({
  declarations: [FormControlViewerComponent],
  imports: [CommonModule, SpecialInputModule],
  exports: [FormControlViewerComponent],
  providers: [SpecialFormBuilderService],
})
export class FormControlViewerModule {}
