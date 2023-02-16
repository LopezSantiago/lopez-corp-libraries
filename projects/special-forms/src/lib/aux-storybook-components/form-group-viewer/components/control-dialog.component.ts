import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { debounceTime, filter, map, Subscription, switchMap, tap } from 'rxjs';
import { EControlTypes } from '../../../core/aux-data/control-types.enum';
import { SpecialFormGroup } from '../../../core/forms/special-forms';
import { SpecialFormBuilderService } from '../../../core/services';
import { FieldFormClass } from './settings-strategy/field.form';
import { CommonFormCreator } from './settings-strategy/common.form.interface';
import { InputFormClass } from './settings-strategy/input.form';
import { DropDownFormClass } from './settings-strategy/dropdown.form';
import { AutocompleteFormClass } from './settings-strategy/autocomplete.form';
import { DatePickerFormClass } from './settings-strategy/datepicker.form';
import { CheckboxFormClass } from './settings-strategy/checkbox.form';
import { UploadFormClass } from './settings-strategy/upload.form';
import { TextAreaFormClass } from './settings-strategy/text-area.form';
import { IFormStructure } from '@lib/core/interfaces/form.interfaces';

@Component({
  selector: 'spf-control-dialog',
  templateUrl: './control-dialog.component.html',
  styleUrls: ['./control-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ControlDialogComponent implements OnInit {
  private formField = new FieldFormClass();
  private formGroup: SpecialFormGroup = this.formBuilder.group(
    this.formField.fields()
  );
  reloadCheck = true;
  sub = new Subscription();
  settingsForm: SpecialFormGroup;
  control: SpecialFormGroup;
  field: IFormStructure;

  constructor(
    private formBuilder: SpecialFormBuilderService,
    public dialogRef: MatDialogRef<ControlDialogComponent>
  ) {}

  ngOnInit(): void {
    let settingsCreator: CommonFormCreator;
    this.formGroup
      .get('type')
      .valueChanges.pipe(
        filter((type) => !!type),
        tap((type) => (settingsCreator = this.settingsCreation(type))),
        map(
          () =>
            this.formBuilder.group(settingsCreator.settingsFields(), {
              label: 'Configuración',
            }) as SpecialFormGroup
        ),
        tap(() => (this.reloadCheck = false)),
        debounceTime(20),
        tap(() => (this.reloadCheck = true)),
        switchMap((settingsForm) => {
          this.formGroup.setControl('settings', settingsForm);
          return this.formGroup.valueChanges;
        }),
        debounceTime(20)
      )
      .subscribe((rawField) => {
        this.field = this.formField.getField(
          rawField,
          settingsCreator.getSettings(rawField.settings)
        );
        this.control = this.formBuilder.group(this.field);
      });
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
      case EControlTypes.upload:
        return new UploadFormClass();
      default:
        return new TextAreaFormClass();
    }
  }

  addControl() {
    this.dialogRef.close(this.field);
  }

  cancel() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
