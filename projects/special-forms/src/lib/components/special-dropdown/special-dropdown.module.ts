import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialDropdownComponent } from './special-dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagePipeModule, TextByFunctionPipeModule } from '../../pipes';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [SpecialDropdownComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    ErrorMessagePipeModule,
    MatIconModule,
    MatButtonModule,
    TextByFunctionPipeModule
  ],
  exports: [SpecialDropdownComponent],
})
export class SpecialDropdownModule {}
