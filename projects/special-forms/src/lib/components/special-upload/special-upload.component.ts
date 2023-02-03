import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpecialFormControl } from '../../core/forms/special-forms';
import { IUploadSettings } from './special-upload.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sp-upload',
  templateUrl: './special-upload.component.html',
  styleUrls: ['./special-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialUploadComponent implements OnInit {
  control: SpecialFormControl<IUploadSettings>;

  @Input('control') set controlSetter(control) {
    this.control = control;
    this.previewImages = control.value;
  }

  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  previewImages = [];

  constructor( private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  onSelectMultiple(event) {
    this.previewImages = [
      ...this.previewImages,
      ...event.addedFiles.map(file =>
      ({
        lastModified: file.lastModified,
        url: this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file))
      }
      ))
    ];

    this.control.setValue(
      [
        ...this.control.value,
        ...event.addedFiles.map(this.fixFileName)
      ]
    );
    this.onSelect.emit(this.control.value)
    this.control.markAsDirty();
  }

  onSelectOne(event) {
    this.previewImages = event.addedFiles.map(file =>
    ({
      lastModified: file.lastModified,
      url: this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file))
    }))

    this.control.setValue(
      event.addedFiles.map(this.fixFileName)
    );
    this.onSelect.emit(this.control.value)
    this.control.markAsDirty();
  }

  fixFileName(file: File) {
    return Object.defineProperty(file, 'name', {
      writable: true,
      value: file.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    });
  }

  clean() {
    this.previewImages = [];
  }
  onRemove(file) {
    this.control.setValue(this.control.value.filter(fl => fl.lastModified !== file.lastModified));
    this.previewImages = this.previewImages.filter(fl => fl.lastModified !== file.lastModified)
  }

}
