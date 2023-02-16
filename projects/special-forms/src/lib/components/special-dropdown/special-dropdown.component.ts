import {
  ChangeDetectionStrategy,
  Component,
  Input,
  HostBinding,
} from '@angular/core';
import { SpecialFormControl } from '../../core/forms/special-forms';
import { IDropdownSettings } from './special-dropdown.interface';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'sp-dropdown',
  templateUrl: './special-dropdown.component.html',
  styleUrls: ['./special-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
