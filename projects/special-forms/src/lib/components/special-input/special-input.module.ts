import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialInputComponent } from './special-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { InputMaskModule } from "@ngneat/input-mask";
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagePipeModule } from '../../pipes';

@NgModule({
  declarations: [SpecialInputComponent],
  imports: [
    InputMaskModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    ErrorMessagePipeModule
  ],
  exports: [SpecialInputComponent],
})
export class SpecialInputModule {}
