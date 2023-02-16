import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { SpecialFormControl } from '../../core/forms/special-forms';
import {
  TSpecialAutocomplete,
  TSpecialDropdown,
} from '../../core/interfaces/form.interfaces';
import { Masks } from '../../core/masks/maks.enum';
import { SpecialFormBuilderService } from '../../core/services';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'spf-form-control-viewer',
  templateUrl: './form-control-viewer.component.html',
  styleUrls: ['./form-control-viewer.component.scss'],
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

  @Input('theme') set themeSetter(theme: string) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.theme = theme;
  }

  @Output() getData: EventEmitter<string> = new EventEmitter();

  control: SpecialFormControl<any>;

  theme

  constructor(
    private overlayContainer: OverlayContainer,
    private specialFormBuilderService: SpecialFormBuilderService
  ) {}

  get controlTypes(): typeof EControlTypes {
    return EControlTypes;
  }

  ngOnInit(): void {}
}
