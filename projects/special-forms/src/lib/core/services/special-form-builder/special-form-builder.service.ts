import { Injectable } from '@angular/core';
import {
  AbstractControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { IAutocompleteSettings } from '../../../components/special-autocomplete/special-autocomplete.interface';
import { EControlTypes } from '../../aux-data/control-types.enum';
import {
  SpecialFormArray,
  SpecialFormControl,
  SpecialFormGroup,
} from '../../forms/special-forms';
import { IFieldData } from '../../interfaces/field-basics.interfaces';
import {
  IFormStructure,
  TRawFields,
  TSpecialArray,
  TSpecialFields,
  TSpecialForm,
  TSpecialInput,
} from '../../interfaces/form.interfaces';

interface IControlParams {
  name: string;
  control: SpecialFormArray | SpecialFormGroup | SpecialFormControl<any>;
}

@Injectable({
  providedIn: 'root',
})
export class SpecialFormBuilderService {
  private readonly defectField: IFieldData = {
    asyncValidators: null,
    validators: null,
    defaultValue: null,
    elementId: '',
    hidden: false,
    icon: '',
    label: '',
    length: 0,
    theme:'light',
    placeholder: '',
    readOnly: false,
    required: false,
    styleClasses: '',
    errorMessages: {},
    tooltip: '',
  };

  private readonly inputDefectField: TSpecialInput = {
    ...this.defectField,
    settings: {},
    type: EControlTypes.input,
    name: '',
  };

  private readonly formDefectField: TSpecialForm = {
    ...this.defectField,
    settings: {
      formFields: {},
    },
    type: EControlTypes.form,
    name: '',
  };

  private readonly arrayDefectField: TSpecialArray = {
    ...this.defectField,
    settings: {
      formFields: {},
    },
    type: EControlTypes.array,
    name: '',
  };

  constructor() {}

  public control(field: Partial<TSpecialFields>): SpecialFormControl<any> {
    const formField: TSpecialFields = {
      ...this.inputDefectField,
      ...field,
    } as TSpecialFields;
    const { control } = this.setFormControl(formField);
    return control;
  }

  public group(fields: IFormStructure) {
    return this.formGenerator(this.fieldDataToArray(fields), {});
  }

  public array() {}

  public fieldDataToArray(fields: IFormStructure): TSpecialFields[] {
    return Object.entries(fields).map(([name, field]) =>
      this.setDefectFieldOptions(name, field)
    );
  }

  private setDefectFieldOptions(
    name: string,
    field: Partial<TRawFields>
  ): TSpecialFields {
    return {
      name,
      ...this.inputDefectField,
      ...field,
    } as TSpecialFields;
  }

  private formGenerator(
    fields: TSpecialFields[],
    field: Partial<TSpecialForm>
  ): SpecialFormGroup {
    const formField: TSpecialForm = {
      ...this.formDefectField,
      ...field,
    };
    const structure = fields
      .map((field) => {
        switch (field.type) {
          case EControlTypes.array:
            return this.setFormArray(field);
          case EControlTypes.form:
            return this.setFormGroup(field);
          default:
            return this.setFormControl(field);
        }
      })
      .reduce(
        (prev, { name, control }: IControlParams) => ({
          ...prev,
          [name]: control,
        }),
        {}
      );
    return new SpecialFormGroup(formField, structure);
  }

  setFormGroup(field: TSpecialForm): {
    name: string;
    control: SpecialFormGroup;
  } {
    const control = this.formGenerator(
      this.fieldDataToArray(field.settings.formFields),
      field
    );
    return { control, name: field.name };
  }

  private setFormArray(field: TSpecialArray): {
    name: string;
    control: SpecialFormArray;
  } {
    const auxForm = this.formGenerator(
      this.fieldDataToArray(field.settings.formFields),
      {}
    );

    if (field.required) {
      field.validators = this.setValidatorsArray(field.validators, [
        this.arrayLengthRequired,
      ]);
    }

    return {
      name: field.name,
      control: new SpecialFormArray(field, auxForm, []),
    };
  }

  private setFormControl(field: TSpecialFields): {
    name: string;
    control: SpecialFormControl<any>;
  } {
    const validators: ValidatorFn[] = [];

    if (field.required) validators.push(this.setRequiredValidator(field));
    if (field.length) validators.push(Validators.maxLength(field.length));

    field.validators = this.setValidatorsArray(field.validators, validators);

    return {
      name: field.name,
      control: new SpecialFormControl(field),
    };
  }

  private setRequiredValidator(field: TSpecialFields): ValidatorFn {
    if (field.type !== EControlTypes.autocomplete) {
      return Validators.required;
    }

    return (control: SpecialFormControl<IAutocompleteSettings>) =>
      !!control.value && control.value instanceof Object
        ? null
        : { required: true };
  }
  private setValidatorsArray(
    validators: ValidatorFn | ValidatorFn[] | null,
    newValidators: ValidatorFn[]
  ): ValidatorFn[] {
    if (!validators) {
      return newValidators;
    }
    return validators instanceof Array
      ? [...validators, ...newValidators]
      : [validators, ...newValidators];
  }

  private arrayLengthRequired(control: AbstractControl) {
    if (control.value.length) {
      return {};
    }
    return { noItems: 'NO_SELECTED_ITEM' };
  }
}
