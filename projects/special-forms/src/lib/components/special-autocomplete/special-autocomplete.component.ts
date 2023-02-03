import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Subscription } from 'rxjs';
import { SpecialFormControl } from '../../core/forms/special-forms';
import { IAutocompleteSettings } from './special-autocomplete.interface';
@Component({
  selector: 'sp-autocomplete',
  templateUrl: './special-autocomplete.component.html',
  styleUrls: ['./special-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialAutocompleteComponent {
  @Input() control: SpecialFormControl<IAutocompleteSettings>;

  subs = new Subscription();

  constructor() {}

  ngOnInit() {
    this.init();
  }

  get settings(): IAutocompleteSettings {
    return this.control.settings;
  }

  init() {
    this.subs.add(
      this.control.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
        if (typeof value === 'string') {
          this.settings.getData(value, this.control);
        }
      })
    );
  }
  configValue = (item: any) => {
    if (!item) return '';
    const fieldName = this.settings.fieldName;
    return fieldName instanceof Function ? fieldName(item) : item[fieldName];
  };

  optionSelected(data: MatAutocompleteSelectedEvent) {
    this.control.setValue(data.option.value);
    if (this.settings.onSelect) this.settings.onSelect(data.option.value);
  }

  iconClick(event) {
    if (this.settings.iconAction) {
      this.settings.iconAction(this.control.value);
      event.stopPropagation();
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
