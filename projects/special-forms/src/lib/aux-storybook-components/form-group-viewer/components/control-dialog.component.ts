import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { of, Subject, Subscription } from 'rxjs';
import { ICON_NAMES } from '../../../core/aux-data/all-icons';
import { EControlTypes } from '../../../core/aux-data/control-types.enum';
import {
  SpecialFormControl,
  SpecialFormGroup,
} from '../../../core/forms/special-forms';
import { IFormStructure } from '../../../core/interfaces/form.interfaces';
import { SpecialFormBuilderService } from '../../../core/services';
import { EnumToArray } from '../../../core/utils/enum-to-array.util';
import { numberMask } from '../../../core/masks/number.mask';
import { ControlsForm } from './control-dialog.form';
interface IFieldFormData {
  type: any;
  placeholder: string;
  label: string;
  name: string;
  tooltip: string;
  icon: { name: string };
  length: number;
  required: boolean;
  readOnly: boolean;
  hidden: boolean;
  disabled: boolean;
}
@Component({
  selector: 'spf-control-dialog',
  templateUrl: './control-dialog.component.html',
  styleUrls: ['./control-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ControlDialogComponent implements OnInit {
  private iconsSub = new Subject<any[]>();
  icons$ = this.iconsSub.asObservable();
  sub = new Subscription();

  formGroup: SpecialFormGroup;
  control: SpecialFormControl<any>;

  constructor(
    private specialFormBuilderService: SpecialFormBuilderService,
    public dialogRef: MatDialogRef<ControlDialogComponent>
  ) {}

  get controlTypes(): typeof EControlTypes {
    return EControlTypes;
  }

  ngOnInit(): void {
    this.formGroup = this.specialFormBuilderService.group(ControlsForm());
    this.sub.add(
      this.formGroup.valueChanges.subscribe((data: IFieldFormData) => {
        if (!!data.type) this.control = this.controlCreation(data);
      })
    );
  }
  controlCreation(data: IFieldFormData): SpecialFormControl<any> {
    switch (data.type) {
      case EControlTypes.dropdown:
        return this.specialFormBuilderService.control({
          ...data,
          icon: data.icon?.name,
          settings: {
            fieldId: '',
            fieldName: '',
            source: of([]),
          },
        });
      case EControlTypes.autocomplete:
      case EControlTypes.multiple:
        return this.specialFormBuilderService.control({
          ...data,
          icon: data.icon?.name,
          settings: {
            fieldId: '',
            fieldName: '',
            source: of([]),
            getData: (query) => {
              console.log(query);
            },
          },
        });
      default:
        return this.specialFormBuilderService.control({
          ...data,
          icon: data.icon?.name,
          settings: {},
        });
    }
  }

  cancel() {}

  getIcons(query) {
    const filteredIcons = ICON_NAMES.filter((icon) => icon.includes(query))
      .slice(0, 10)
      .map((icon) => ({ name: icon }));
    this.iconsSub.next(filteredIcons);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
