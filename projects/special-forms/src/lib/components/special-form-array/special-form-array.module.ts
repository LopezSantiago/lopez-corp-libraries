import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SpecialArrayComponent } from './special-form-array.component';
import { FormControlsListPipeModule } from '../../pipes/controls-list-pipe/controls-list.pipe.module';
import { ControlsRenderDirectiveModule } from '../../core/directives/control-render.module';

@NgModule({
  declarations: [SpecialArrayComponent],
  imports: [
    CommonModule,
    FormControlsListPipeModule,
    MatButtonModule,
    ControlsRenderDirectiveModule,
  ],
  exports: [SpecialArrayComponent],
})
export class SpecialArrayModule {}
