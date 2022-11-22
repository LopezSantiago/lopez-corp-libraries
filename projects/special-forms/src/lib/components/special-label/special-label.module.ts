import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialLabelComponent } from './special-label.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { InputMaskModule } from "@ngneat/input-mask";
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagePipeModule, TextByFunctionPipeModule } from '../../pipes';

@NgModule({
  declarations: [SpecialLabelComponent],
  imports: [
    InputMaskModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    TextByFunctionPipeModule,
    ErrorMessagePipeModule
  ],
  exports: [SpecialLabelComponent],
})
export class SpecialLabelModule {}
