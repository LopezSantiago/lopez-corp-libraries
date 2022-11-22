import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialDatepickerComponent } from './special-datepicker.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagePipeModule } from '../../pipes';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [SpecialDatepickerComponent],
  imports: [
    MatInputModule,
    MatDatepickerModule,
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    ErrorMessagePipeModule,
    MatNativeDateModule
  ],
  exports: [SpecialDatepickerComponent],
})
export class SpecialDatepickerModule {}
