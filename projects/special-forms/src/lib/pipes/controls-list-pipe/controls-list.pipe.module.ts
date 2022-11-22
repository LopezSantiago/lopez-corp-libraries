import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormControlsListPipe } from './controls-list.pipe';

@NgModule({
  declarations: [FormControlsListPipe],
  imports: [CommonModule],
  exports: [FormControlsListPipe],
})
export class FormControlsListPipeModule {}
