import { Directive, Input, ViewContainerRef } from '@angular/core';
import { SpecialAutocompleteComponent } from '../../components/special-autocomplete/special-autocomplete.component';
import { SpecialCheckboxComponent } from '../../components/special-checkbox/special-checkbox.component';
import { SpecialDatepickerComponent } from '../../components/special-datepicker/special-datepicker.component';
import { SpecialDropdownComponent } from '../../components/special-dropdown/special-dropdown.component';
import { SpecialArrayComponent } from '../../components/special-form-array/special-form-array.component';
import { SpecialFormComponent } from '../../components/special-form/special-form.component';
import { SpecialInputComponent } from '../../components/special-input/special-input.component';
import { SpecialLabelComponent } from '../../components/special-label/special-label.component';
import { SpecialMultipleAutocompleteComponent } from '../../components/special-multiple-autocomplete/special-multiple-autocomplete.component';
import { SpecialTextAreaComponent } from '../../components/special-text-area/special-text-area.component';
import { SpecialUploadComponent } from '../../components/special-upload/special-upload.component';
import { EControlTypes } from '../aux-data/control-types.enum';
import { SpecialFormControl } from '../forms/special-forms';

@Directive({
  selector: `[controlRender]`,
})
export class FormControlsRenderDirective {
  readonly componentsBuffer = {
    [EControlTypes.autocomplete]: SpecialAutocompleteComponent,
    [EControlTypes.checkbox]: SpecialCheckboxComponent,
    [EControlTypes.date]: SpecialDatepickerComponent,
    [EControlTypes.dropdown]: SpecialDropdownComponent,
    [EControlTypes.array]: SpecialArrayComponent,
    [EControlTypes.input]: SpecialInputComponent,
    [EControlTypes.multiple]: SpecialMultipleAutocompleteComponent,
    [EControlTypes.textArea]: SpecialTextAreaComponent,
    [EControlTypes.label]: SpecialLabelComponent,
    [EControlTypes.file]: SpecialUploadComponent,
    [EControlTypes.form]: SpecialFormComponent,
  };

  @Input('control') set controlSetter(control: SpecialFormControl<any>) {
    this.viewContainer.clear();
    const component = this.componentsBuffer[control.type];
    if (component) {
      const componentRef = this.viewContainer.createComponent(component);
      (componentRef.instance as any).control = control;
    }
  }

  constructor(private viewContainer: ViewContainerRef) {}
}
