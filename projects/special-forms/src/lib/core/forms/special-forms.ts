import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { EControlTypes } from '../aux-data/control-types.enum';
import { IFieldBasicData } from '../interfaces/field-basics.interfaces';
import {
  IArraySettings,
  IFormSettings,
  TSpecialFields,
  TSpecialForm,
  TSpecialArray,
} from '../interfaces/form.interfaces';
export class SpecialFormControl<T>
  extends FormControl
  implements IFieldBasicData
{
  public name: string;
  public placeholder: string;
  public label: string;
  public tooltip: string;
  public icon: string;
  public elementId: string;
  public styleClasses: string;
  public length: number;
  public required: boolean;
  public hidden: boolean;
  public readOnly: boolean;
  public settings: T;
  public type: EControlTypes;
  public errorMessages: { [key: string]: string };

  constructor({
    name,
    settings,
    type,
    validators,
    asyncValidators,
    elementId,
    styleClasses,
    defaultValue,
    hidden,
    icon,
    label,
    length,
    placeholder,
    readOnly,
    required,
    tooltip,
    errorMessages,
    disabled,
  }: TSpecialFields) {
    super(defaultValue, validators, asyncValidators);

    this.name = name;
    this.placeholder = placeholder;
    this.label = label;
    this.tooltip = tooltip;
    this.icon = icon;
    this.elementId = elementId;
    this.settings = settings as T;
    this.type = type;
    this.styleClasses = styleClasses;
    this.hidden = hidden;
    this.length = length;
    this.readOnly = readOnly;
    this.required = required;
    this.errorMessages = errorMessages;
    disabled ? this.disable() : this.enable();
  }

  setReadOnly(status: boolean = true) {
    this.readOnly = status;
  }

  setDisabled(status: boolean = true) {
    status ? this.disable() : this.enable();
  }

  setHidden(status = true) {
    this.hidden = status;
  }
}
export class SpecialFormGroup extends FormGroup implements IFieldBasicData {
  public name: string;
  public placeholder: string;
  public label: string;
  public tooltip: string;
  public icon: string;
  public elementId: string;
  public styleClasses: string;
  public length: number;
  public required: boolean;
  public hidden: boolean;
  public readOnly: boolean;
  public settings: IFormSettings;
  public type: EControlTypes.form;
  public defaultValue: any;
  public errorMessages: { [key: string]: string };

  constructor(
    {
      name,
      settings,
      type,
      validators,
      asyncValidators,
      elementId,
      styleClasses,
      defaultValue,
      hidden,
      icon,
      label,
      length,
      placeholder,
      readOnly,
      required,
      tooltip,
      disabled,
    }: TSpecialForm,
    controls: {
      [key: string]: SpecialFormControl<any>;
    },
  ) {
    super(controls, validators, asyncValidators);

    this.name = name;
    this.placeholder = placeholder;
    this.label = label;
    this.tooltip = tooltip;
    this.icon = icon;
    this.elementId = elementId;
    this.settings = settings;
    this.type = type;
    this.styleClasses = styleClasses;
    this.hidden = hidden;
    this.length = length;
    this.readOnly = readOnly;
    this.required = required;
    this.defaultValue = defaultValue;
    disabled ? this.disable() : this.enable();
  }

  unpristineRequired() {
    Object.values(this.controls).forEach((control) => {
      if (control instanceof SpecialFormControl) {
        control.markAsDirty();
      } else if (control instanceof SpecialFormGroup) {
        control.unpristineRequired();
      } else if (control instanceof SpecialFormArray) {
        control.unpristineRequired();
      }
    });
  }

  specialReset(value = {}) {
    const aux: any = {};
    Object.entries(this.controls).map(([key, control]) => {
      if (control instanceof SpecialFormControl) {
        aux[key] = control.defaultValue;
      } else if (control instanceof SpecialFormArray) {
        control.clear();
      }
    });

    this.reset({ ...aux, ...value });
  }
  setReadOnly(status: boolean = true) {
    Object.values(this.controls).map((value) => {
      if (
        value instanceof SpecialFormControl ||
        value instanceof SpecialFormArray ||
        value instanceof SpecialFormGroup
      ) {
        value.setReadOnly(status);
      }
    });
  }
  setReadOnlyByFields(fieldsObject: { [key: string]: boolean }) {
    Object.entries(fieldsObject).map(([key, value]) => {
      const control = this.controls[key];
      if (control instanceof SpecialFormControl) {
        control.readOnly = value;
      }
    });
  }

  setHiddenByFields(fields: { [key: string]: boolean }) {
    Object.entries(fields).map(([key, value]) => {
      const control = this.controls[key];
      if (control instanceof SpecialFormControl) {
        control.hidden = value;
      }
    });
  }
  setDisabled(status: boolean) {
    Object.values(this.controls).map((value) => {
      if (
        value instanceof SpecialFormControl ||
        value instanceof SpecialFormArray ||
        value instanceof SpecialFormGroup
      ) {
        value.setDisabled(status);
      }
    });
  }

  setDisabledByFields(fieldsObject: any) {
    Object.entries(fieldsObject).map((entries) => {
      if (this.controls[entries[0]] instanceof SpecialFormControl) {
        entries[1]
          ? this.controls[entries[0]].enable()
          : this.controls[entries[0]].disable();
      }
    });
  }

  /**
   * donde value es el objeto semilla y detailForm es un arreglo de form key para dar un marco al formarray
   */

  setFormValue(value: any) {
    this.specialReset(value);
    Object.entries(this.controls)
      .filter(([_key, control]) => control instanceof SpecialFormArray)
      .map(([key, control]) => {
        (control as SpecialFormArray).fillFormArray(value[key]);
      });
  }

  /**
   * Método que retorna
   */

  getIdPkey(): SpecialFormControl<any> | undefined {
    return Object.values(this.controls).find(
      (control) =>
        control instanceof SpecialFormControl && control.type === 'PRIMARY-KEY'
    ) as SpecialFormControl<any> | undefined;
  }
}

export class SpecialFormArray extends FormArray implements IFieldBasicData {
  public name: string;
  public placeholder: string;
  public label: string;
  public tooltip: string;
  public icon: string;
  public elementId: string;
  public styleClasses: string;
  public required: boolean;
  public hidden: boolean;
  public readOnly: boolean;
  public settings: IArraySettings;
  public type: EControlTypes;
  public defaultValue: any;
  public form: SpecialFormGroup;
  private formCreation: (value?: any) => SpecialFormGroup;
  public errorMessages: { [key: string]: string };

  constructor(
    {
      name,
      settings,
      type,
      validators,
      asyncValidators,
      elementId,
      styleClasses,
      defaultValue,
      hidden,
      icon,
      label,
      placeholder,
      readOnly,
      required,
      tooltip,
      errorMessages,
      disabled,
    }: TSpecialArray,
    formCreation: () => SpecialFormGroup,
    controls: AbstractControl[]
  ) {
    super(controls, validators, asyncValidators);
    this.formCreation = formCreation;
    this.form = this.formCreation();
    this.name = name;
    this.placeholder = placeholder;
    this.label = label;
    this.tooltip = tooltip;
    this.icon = icon;
    this.elementId = elementId;
    this.settings = settings;
    this.type = type;
    this.styleClasses = styleClasses;
    this.hidden = hidden;
    this.readOnly = readOnly;
    this.required = required;
    this.defaultValue = defaultValue;
    this.errorMessages = errorMessages;
    disabled ? this.disable() : this.enable();
  }

  fillFormArray(data: any[]) {
    this.form.reset();
    this.clear();
    data.forEach((item) => {
      const form = this.formCreation(item);
      this.push(form);
    });
  }

  addItem() {
    const form = this.formCreation(this.form.value);

    this.form.specialReset();
    this.push(form);
    this.markAsDirty();
  }

  specialPush(index?: number) {
    const form = this.formCreation(this.form.value);
    if (!index) this.push(form);
    else this.controls[index].reset(this.form.value);
  }

  specialInsert(index = 0) {
    const form = this.formCreation(this.form.value);
    this.insert(index, form);
  }

  specialEdit(index: number, newValue: Object) {
    this.controls[index].reset({ ...this.controls[index].value, ...newValue });
    this.markAsDirty();
  }

  /**
   * Vuelve todos los controles del formArray de lectura o de sololectura
   * @param status
   */

  setReadOnly(status: boolean) {
    this.readOnly = status;
    this.controls.forEach((control) => {
      if (control instanceof SpecialFormGroup) {
        control.setReadOnly(status);
      }
    });
  }

  /**
   * Vuelve todos los controles del formArray habilitados o deshabilitados
   * @param status
   */

  setDisabled(status: boolean) {
    status ? this.disable() : this.enable();
    this.controls.forEach((control) => {
      if (control instanceof SpecialFormGroup) {
        control.setDisabled(status);
      }
    });
  }

  /**
   * Permite editar un control especifico.
   * @param index
   */

  editControl(index: number) {
    this.form.reset(this.controls[index].value);
  }

  unpristineRequired() {
    this.markAsDirty();
    this.controls.forEach((item) => {
      (<SpecialFormGroup>item).unpristineRequired();
    });
  }

  recursiveFillForm(form: FormGroup, data: any): FormGroup {
    Object.entries(form.controls).map(([key, control]) => {
      if (control instanceof FormControl) {
        control.setValue(data[key]);
      } else if (control instanceof FormArray) {
        data[key].forEach(() => {});
      } else if (control instanceof FormGroup) {
        control.reset(data[key]);
      }
    });
    return form;
  }
}
