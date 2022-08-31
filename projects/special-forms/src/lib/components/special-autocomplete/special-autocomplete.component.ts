import { Component, Input, Output, EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Subscription, } from 'rxjs';
import * as _ from 'lodash';

import { SpecialFormControl } from '../../core/forms/special-forms';
import {
  IAutocompleteSettings,
} from './special-autocomplete.interface';
@Component({
  selector: 'sp-autocomplete',
  templateUrl: './special-autocomplete.component.html',
  styleUrls: ['./special-autocomplete.component.scss'],
})
export class SpecialAutocompleteComponent {
  @Input() control: SpecialFormControl<IAutocompleteSettings>;
  @Output() select: EventEmitter<any> = new EventEmitter();

  subs = new Subscription();

  constructor() {}

  ngOnInit(){
    this.init();
  }
  init() {
    this.subs.add(
      this.control.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
        if (typeof value === 'string') {
          this.control.settings.getData(value,this.control);
        }
      })
    );
  }

  configValue = (item: any) => {
    if (!item) return '';
    const fieldName = this.control.settings.fieldName;
    return fieldName instanceof Function ? fieldName(item) : item[fieldName];
  };

  optionSelected(data: MatAutocompleteSelectedEvent) {
    this.control.setValue(data.option.value);
    this.select.emit(data.option.value);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
