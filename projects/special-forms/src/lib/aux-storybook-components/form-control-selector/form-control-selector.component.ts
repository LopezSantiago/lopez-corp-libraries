import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentsBuffer } from '@lib/components/special-form/special-form.component';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { SpecialFormControl } from '../../core/forms/special-forms';
@Component({
  selector: 'sp-form-control-selector',
  templateUrl: './form-control-selector.component.html',
  styleUrls: ['./form-control-selector.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormControlSelectorComponent implements OnInit {
  @Input() control: SpecialFormControl<any>;

  componentsBuffer=ComponentsBuffer

  get controlTypes(): typeof EControlTypes {
    return EControlTypes;
  }

  ngOnInit(): void {}
}
