import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagePipeModule, TextByFunctionPipeModule } from '../../pipes';
import { SpecialAutocompleteComponent } from './special-autocomplete.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SpecialAutocompleteComponent],
  imports: [
    MatInputModule,
    CommonModule,
    MatAutocompleteModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    ErrorMessagePipeModule,
    TextByFunctionPipeModule,
  ],
  exports: [SpecialAutocompleteComponent],
})
export class SpecialAutocompleteModule {}
