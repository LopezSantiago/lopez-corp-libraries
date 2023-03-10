import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SpecialFormControl } from '../../core/forms/special-forms';
import { IDatePickerSettings } from './special-datepicker.interface';

@Component({
  selector: 'sp-datepicker',
  templateUrl: './special-datepicker.component.html',
  styleUrls: ['./special-datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialDatepickerComponent implements OnInit {
  @Input() control: SpecialFormControl<IDatePickerSettings>;

  constructor() {}

  get startAt() {
    return this.control.settings?.startAt || new Date();
  }

  ngOnInit(): void {}
}
