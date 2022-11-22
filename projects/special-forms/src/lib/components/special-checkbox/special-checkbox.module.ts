import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialCheckboxComponent } from './special-checkbox.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagePipeModule } from '../../pipes';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [SpecialCheckboxComponent],
  imports: [
    FormsModule,
    MatCheckboxModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    ErrorMessagePipeModule
  ],
  exports: [SpecialCheckboxComponent],
})
export class SpecialCheckboxModule {}
