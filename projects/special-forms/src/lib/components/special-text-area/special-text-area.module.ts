import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialTextAreaComponent } from './special-text-area.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { InputMaskModule } from '@ngneat/input-mask';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagePipeModule } from '../../pipes';

@NgModule({
  declarations: [SpecialTextAreaComponent],
  imports: [
    InputMaskModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    ErrorMessagePipeModule,
  ],
  exports: [SpecialTextAreaComponent],
})
export class SpecialTextAreaModule {}
