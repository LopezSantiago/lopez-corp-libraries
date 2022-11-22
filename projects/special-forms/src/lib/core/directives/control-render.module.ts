import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormControlsRenderDirective } from './control-render.directive';

@NgModule({
  declarations: [FormControlsRenderDirective],
  imports: [CommonModule],
  exports: [FormControlsRenderDirective],
})
export class ControlsRenderDirectiveModule {}
