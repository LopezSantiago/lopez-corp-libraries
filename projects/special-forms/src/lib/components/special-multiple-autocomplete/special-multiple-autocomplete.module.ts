import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagePipeModule, TextByFunctionPipeModule } from '../../pipes';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { SpecialMultipleAutocompleteComponent } from './special-multiple-autocomplete.component';

@NgModule({
  declarations: [SpecialMultipleAutocompleteComponent],
  imports: [
    MatInputModule,
    CommonModule,
    MatAutocompleteModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    ErrorMessagePipeModule,
    TextByFunctionPipeModule,
    MatChipsModule,

  ],
  exports: [SpecialMultipleAutocompleteComponent],
})
export class SpecialMultipleAutocompleteModule {}
