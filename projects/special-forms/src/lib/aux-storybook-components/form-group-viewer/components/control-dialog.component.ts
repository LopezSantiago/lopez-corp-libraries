import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  combineLatest,
  debounceTime,
  filter,
  forkJoin,
  map,
  of,
  startWith,
  Subject,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { EControlTypes } from '../../../core/aux-data/control-types.enum';
import {
  SpecialFormControl,
  SpecialFormGroup,
} from '../../../core/forms/special-forms';
import { TRawFields } from '../../../core/interfaces/form.interfaces';
import { SpecialFormBuilderService } from '../../../core/services';
import { FieldFormClass } from './settings-strategy/field.form';
import { CommonFormCreator } from './settings-strategy/common.form.interface';
import { InputFormClass } from './settings-strategy/input.form';
import { DropDownFormClass } from './settings-strategy/dropdown.form';
import { AutocompleteFormClass } from './settings-strategy/autocomplete.form';
import { DatePickerFormClass } from './settings-strategy/datepicker.form';
import { CheckboxFormClass } from './settings-strategy/checkbox.form';

@Component({
  selector: 'spf-control-dialog',
  templateUrl: './control-dialog.component.html',
  styleUrls: ['./control-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ControlDialogComponent implements OnInit {
  sub = new Subscription();
  formGroup: SpecialFormGroup;
  settingsForm: SpecialFormGroup;
  control: SpecialFormGroup;
  formField = new FieldFormClass();
  settingsCreator: CommonFormCreator;

  constructor(
    private formBuilder: SpecialFormBuilderService,
    public dialogRef: MatDialogRef<ControlDialogComponent>
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(this.formField.fields());

    this.formGroup
      .get('type')
      .valueChanges.pipe(
        filter((type) => !!type),
        tap((type) => {
          this.settingsCreator = this.settingsCreation(type);
          const settingsForm = this.formBuilder.group(
            this.settingsCreator.settingsFields()
          );
          this.formGroup.setControl('settings', settingsForm);
        })
      )
      .subscribe();

    this.formGroup.valueChanges.pipe(debounceTime(10)).subscribe((value) => {
      console.log(value);
      // const control = this.formBuilder.control(value);
      // console.log(control);
      // console.log(this.formGroup);
    });
    // this.sub.add(
    //   combineLatest([this.formGroup.valueChanges, settings$])
    //     .pipe(debounceTime(10))
    //     .subscribe(([control, settings]) => {
    //       // const field = this.formField.getField(control, settings);
    //       // this.control = this.formBuilder.group(field);
    //     })
    // );
  }

  settingsCreation(type: EControlTypes): CommonFormCreator {
    switch (type) {
      case EControlTypes.input:
        return new InputFormClass();
      case EControlTypes.dropdown:
        return new DropDownFormClass();
      case EControlTypes.autocomplete:
      case EControlTypes.multiple:
        return new AutocompleteFormClass();
      case EControlTypes.date:
        return new DatePickerFormClass();
      case EControlTypes.checkbox:
        return new CheckboxFormClass();
      default:
        return new InputFormClass();
    }
  }

  cancel() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
