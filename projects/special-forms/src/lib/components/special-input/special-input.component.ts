import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpecialFormControl } from '../../core/forms/special-forms';
import { IInputSettings } from './special-input.interface';

@Component({
  selector: 'sp-input',
  templateUrl: './special-input.component.html',
  styleUrls: ['./special-input.component.scss'],
})
export class SpecialInputComponent implements OnInit {
  @Input() control: SpecialFormControl<IInputSettings>;

  constructor() {}

  ngOnInit(): void {}

  onEnterClick() {
    if (this.settings.onEnter) {
      this.settings.onEnter(this.control.value);
    }
  }

  onBlurAction(){
    if (this.settings.onBlur) {
      this.settings.onBlur(this.control.value);
    }
  }

  get settings(): IInputSettings {
    return this.control.settings;
  }

  iconClick(event) {
    if (this.settings.iconAction) {
      this.settings.iconAction(this.control.value);
      event.stopPropagation();
    }
  }
}
