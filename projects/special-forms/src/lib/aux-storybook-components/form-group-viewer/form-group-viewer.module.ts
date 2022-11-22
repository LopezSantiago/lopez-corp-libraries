import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupViewerComponent } from './form-group-viewer.component';
import { SpecialFormBuilderService } from '../../core/services';
import { SpecialFormModule } from '../../components/special-form/special-form.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ControlDialogComponent } from './components/control-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { FormControlSelectorModule } from '../form-control-selector/form-control-selector.module';

@NgModule({
  declarations: [FormGroupViewerComponent, ControlDialogComponent],
  imports: [
    CommonModule,
    SpecialFormModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    FormControlSelectorModule,
  ],
  exports: [FormGroupViewerComponent],
  providers: [SpecialFormBuilderService],
})
export class FormGroupViewerModule {}
