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
  @Input('field') set fieldSetter(field: any) {
    this.control = this.specialFormBuilderService.control(field);
  }

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

  @Input() theme;

  // @Input('theme') set themeSetter(theme: 'light' | 'dark') {
  //   const classes = document.querySelector('body.sb-show-main').classList;
  //   theme === 'dark'
  //     ? classes.add('dark', 'mat-app-background')
  //     : classes.remove('dark', 'mat-app-background');
  // }

  @Output() getData: EventEmitter<string> = new EventEmitter();

  control: SpecialFormControl<any>;

  constructor(private specialFormBuilderService: SpecialFormBuilderService) {}

  get controlTypes(): typeof EControlTypes {
    return EControlTypes;
  }

  ngOnInit(): void {}
}
