import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { EControlTypes } from '@lib/core/aux-data/control-types.enum';
import {
  SpecialFormGroup,
  SpecialFormArray,
} from '../../core/forms/special-forms';
import { SpecialAutocompleteComponent } from '../special-autocomplete/special-autocomplete.component';
import { SpecialCheckboxComponent } from '../special-checkbox/special-checkbox.component';
import { SpecialDatepickerComponent } from '../special-datepicker/special-datepicker.component';
import { SpecialDropdownComponent } from '../special-dropdown/special-dropdown.component';
import { SpecialInputComponent } from '../special-input/special-input.component';
import { SpecialLabelComponent } from '../special-label/special-label.component';
import { SpecialMultipleAutocompleteComponent } from '../special-multiple-autocomplete/special-multiple-autocomplete.component';
import { SpecialTextAreaComponent } from '../special-text-area/special-text-area.component';
import { SpecialUploadComponent } from '../special-upload/special-upload.component';

@Component({
  selector: 'sp-form',
  templateUrl: './special-form.component.html',
  styleUrls: ['./special-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialFormComponent implements OnInit {
  @Input('control') form: SpecialFormGroup;

  componentsBuffer = ComponentsBuffer;

  set control(form: SpecialFormGroup) {
    this.form = form;
  }

  ngOnInit(): void {}

}

@Component({
  selector: 'sp-array',
  templateUrl: './special-form-array.component.html',
  styleUrls: ['./special-form-array.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialArrayComponent implements OnInit {
  @Input('control') formArray: any;

  componentsBuffer = ComponentsBuffer;

  set control(formArray: any) {
    this.formArray = formArray;
  }

  get withFormHeader() {
    return this.formArray.settings.withFormHeader;
  }

  get settings() {
    return this.formArray.settings;
  }

  constructor() {}

  ngOnInit() {}

  removeItem(index) {
    this.formArray.removeAt(index);
  }
  addItem() {
    this.formArray.addItem();
  }
}

export const ComponentsBuffer = {
  [EControlTypes.autocomplete]: SpecialAutocompleteComponent,
  [EControlTypes.checkbox]: SpecialCheckboxComponent,
  [EControlTypes.date]: SpecialDatepickerComponent,
  [EControlTypes.dropdown]: SpecialDropdownComponent,
  [EControlTypes.array]: SpecialArrayComponent,
  [EControlTypes.input]: SpecialInputComponent,
  [EControlTypes.multiple]: SpecialMultipleAutocompleteComponent,
  [EControlTypes.textArea]: SpecialTextAreaComponent,
  [EControlTypes.label]: SpecialLabelComponent,
  [EControlTypes.upload]: SpecialUploadComponent,
  [EControlTypes.form]: SpecialFormComponent,
};
