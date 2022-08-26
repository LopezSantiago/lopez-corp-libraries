import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { EControlTypes } from '../../core/enums/control-types.enum';
import { SpecialFormControl } from '../../core/forms/special-forms';
import { TSpecialFields } from '../../core/interfaces/form.interfaces';
import { SpecialFormBuilderService } from '../../core/services';

@Component({
  selector: 'spf-form-control-viewer',
  templateUrl: './form-control-viewer.component.html',
  styleUrls: ['./form-control-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormControlViewerComponent implements OnInit {
  @Input('field') set fieldSetter(field: Partial<TSpecialFields>) {
    this.control = this.specialFormBuilderService.control(field);
  }

  controlTypes = EControlTypes;
  control: SpecialFormControl<any>;

  constructor(private specialFormBuilderService: SpecialFormBuilderService) {}

  ngOnInit(): void {}
}
