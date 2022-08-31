import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialDropdownComponent } from './special-dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagePipeModule, TextByFunctionPipeModule } from '../../pipes';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [SpecialDropdownComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    ErrorMessagePipeModule,
    MatIconModule,
    TextByFunctionPipeModule
  ],
  exports: [SpecialDropdownComponent],
})
export class SpecialDropdownModule {}
