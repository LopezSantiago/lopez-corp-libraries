import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SpecialFormControl } from '../../core/forms/special-forms';
import { ICheckboxSettings } from './special-checkbox.interface';
@Component({
  selector: 'sp-checkbox',
  templateUrl: './special-checkbox.component.html',
  styleUrls: ['./special-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialCheckboxComponent implements OnInit {
  @Input() control: SpecialFormControl<ICheckboxSettings>;
  constructor() {}
  ngOnInit(): void {}
}
