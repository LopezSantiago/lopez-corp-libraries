import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { SpecialFormControl } from '../../core/forms/special-forms';
import {
  TSpecialAutocomplete,
  TSpecialDropdown,
} from '../../core/interfaces/form.interfaces';
import { Masks } from '../../core/masks/maks.enum';
import { SpecialFormBuilderService } from '../../core/services';

@Component({
  selector: 'spf-form-control-viewer',
  templateUrl: './form-control-viewer.component.html',
  styleUrls: ['./form-control-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormControlViewerComponent implements OnInit {
  @Input('input') set inputSetter(field: any) {
    field.settings.mask = Masks[field.settings.mask];
    this.control = this.specialFormBuilderService.control(field);
  }

  @Input('dropdown') set dropdownSetter(field: Partial<TSpecialDropdown>) {
    this.control = this.specialFormBuilderService.control(field);
  }

  @Input('autocomplete') set autocompleteSetter(
    field: Partial<TSpecialAutocomplete>
  ) {
    field.settings.getData = () => this.getData.emit();
    this.control = this.specialFormBuilderService.control(field);
  }

  @Input() theme: 'light' | 'dark' = 'light';

  @Output() getData: EventEmitter<string> = new EventEmitter();

  control: SpecialFormControl<any>;

  constructor(private specialFormBuilderService: SpecialFormBuilderService) {}

  get controlTypes(): typeof EControlTypes {
    return EControlTypes;
  }

  ngOnInit(): void {}
}
