import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialUploadComponent } from './special-upload.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagePipeModule } from '../../pipes';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [SpecialUploadComponent],
  imports: [
    FormsModule,
    NgxDropzoneModule,
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    ErrorMessagePipeModule
  ],
  exports: [SpecialUploadComponent],
})
export class SpecialUploadModule {}
