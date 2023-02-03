import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SpecialFormControl } from '../../core/forms/special-forms';
import { ILabelSettings } from './special-label.interface';

@Component({
  selector: 'sp-label',
  templateUrl: './special-label.component.html',
  styleUrls: ['./special-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialLabelComponent implements OnInit {
  @Input() control: SpecialFormControl<ILabelSettings>;

  constructor() {}

  ngOnInit(): void {}

  get settings(): ILabelSettings {
    return this.control.settings || { isLink: false };
  }

  onLink() {
    if (this.settings.isLink && this.settings.onClickLink) {
      this.settings.onClickLink(this.control.value);
    }
  }
}
