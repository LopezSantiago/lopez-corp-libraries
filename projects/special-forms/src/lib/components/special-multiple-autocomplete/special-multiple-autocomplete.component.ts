import { Component, Input, Output, EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

import { SpecialFormControl } from '../../core/forms/special-forms';
import { IMultipleAutocompleteSettings } from './special-multiple-autocomplete.interface';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'sp-multiple-autocomplete',
  templateUrl: './special-multiple-autocomplete.component.html',
  styleUrls: ['./special-multiple-autocomplete.component.scss'],
})
export class SpecialMultipleAutocompleteComponent {
  @Input() control: SpecialFormControl<IMultipleAutocompleteSettings>;

  subs = new Subscription();
  internalControl = new FormControl();

  constructor() {}

  ngOnInit() {
    this.init();
  }

  get settings(): IMultipleAutocompleteSettings {
    return this.control.settings;
  }

  init() {
    this.subs.add(
      this.internalControl.valueChanges
        .pipe(debounceTime(500))
        .subscribe((value) => {
          if (typeof value === 'string') {
            this.control.settings.getData(value, this.control);
          }
        })
    );
  }

  optionSelected(data: MatAutocompleteSelectedEvent) {
    const newItem = data.option.value;
    this.internalControl.reset();
    this.control.setValue([
      ...(this.control.value || []).filter(
        (item) =>
          item[this.control.settings.fieldId] !==
          newItem[this.control.settings.fieldId]
      ),
      newItem,
    ]);

    if (this.settings.onSelect) this.settings.onSelect(newItem);
  }

  iconClick(event) {
    if (this.settings.iconAction) {
      this.settings.iconAction(this.control.value);
      event.stopPropagation();
    }
  }

  remove(value: any[]): void {
    let currentValues = Array.from(this.control.value);
    const index = currentValues.indexOf(value);

    if (index > -1) {
      currentValues.splice(index, 1);
      const value = currentValues;
      this.control.markAsDirty();
      this.control.setValue(value);
    }
  }

  configValue = (item: any) => {
    if (!item) return '';
    const fieldName = this.control.settings.fieldName;
    return fieldName instanceof Function ? fieldName(item) : item[fieldName];
  };

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
