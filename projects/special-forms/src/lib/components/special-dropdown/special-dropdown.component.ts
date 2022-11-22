import { Component, Input } from '@angular/core';
import { SpecialFormControl } from '../../core/forms/special-forms';
import { IDropdownSettings } from './special-dropdown.interface';

@Component({
  selector: 'sp-dropdown',
  templateUrl: './special-dropdown.component.html',
  styleUrls: ['./special-dropdown.component.scss'],
})
export class SpecialDropdownComponent {
  @Input() control: SpecialFormControl<IDropdownSettings>;

  get settings(): IDropdownSettings {
    return this.control.settings;
  }

  iconClick(event) {
    if (this.settings.iconAction) {
      this.settings.iconAction(this.control.value);
      event.stopPropagation();
    }
  }

  optionSelected(value) {
    if (this.settings.onSelect) this.settings.onSelect(value);
  }
}
