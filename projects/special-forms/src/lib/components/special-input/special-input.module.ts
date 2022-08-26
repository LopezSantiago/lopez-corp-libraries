import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialInputComponent } from './special-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagePipe } from '../../pipes/error.pipe';

@NgModule({
  declarations: [SpecialInputComponent, ErrorMessagePipe],
  imports: [CommonModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  exports: [SpecialInputComponent],
})
export class SpecialInputModule {}
