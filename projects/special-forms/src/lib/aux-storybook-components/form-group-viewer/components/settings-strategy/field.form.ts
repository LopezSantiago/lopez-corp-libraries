import { IInputSettings } from '@lib/components/special-input/special-input.interface';
import { EControlTypes } from '@lib/core/aux-data/control-types.enum';
import {
  IFormStructure,
  TSpecialFields,
} from '@lib/core/interfaces/form.interfaces';
import { Masks } from '@lib/core/masks/maks.enum';
import { numberMask } from '@lib/core/masks/number.mask';
import { EnumToArray } from '@lib/core/utils/enum-to-array.util';
import { InputmaskOptions } from '@ngneat/input-mask';
import { of } from 'rxjs';
import { CommonFormClass } from './common.form';
import { AllControlSettings, CommonFormCreator } from './common.form.interface';

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
  errorMessages: { key: string; value: string }[];
}

export class FieldFormClass extends CommonFormClass {
  public fields(): IFormStructure {
    return {
      type: {
        placeholder: 'Selecciona el tipo de control',
        label: 'Tipo de control',
        styleClasses: 'px-2 box-border md:w-2/4',
        required: true,
        type: EControlTypes.dropdown,
        settings: {
          fieldId: 'value',
          fieldName: 'value',
          source: of(
            EnumToArray(EControlTypes).filter(
              (type) =>
                ![
                  EControlTypes.array,
                  EControlTypes.form,
                  EControlTypes.default,
                  EControlTypes.pkey,
                  EControlTypes.time,
                ].includes(type.value)
            )
          ),
        },
      },
      placeholder: {
        placeholder: '',
        label: 'Placeholder',
        styleClasses: 'px-2 box-border md:w-2/4',
        type: EControlTypes.input,
        settings: {},
      },
      label: {
        placeholder: '',
        label: 'Etiqueta',
        styleClasses: 'px-2 box-border md:w-2/4',
        type: EControlTypes.input,
        settings: {},
      },
      name: {
        placeholder: '',
        label: 'Nombre del campo',
        styleClasses: 'px-2 box-border md:w-2/4',
        required: true,
        type: EControlTypes.input,
        settings: {},
      },
      tooltip: {
        placeholder: '',
        label: 'Mensaje de ayuda',
        styleClasses: 'px-2 box-border md:w-2/4',
        type: EControlTypes.input,
        settings: {},
      },
      length: {
        placeholder: '',
        label: 'Largo permitido',
        styleClasses: 'px-2 box-border md:w-2/4',
        type: EControlTypes.input,
        settings: {
          mask: numberMask(),
        },
      },
      icon: this.iconField('Icono'),
      required: {
        label: 'Campo requerido',
        styleClasses: 'px-2 box-border md:w-1/4',
        type: EControlTypes.checkbox,
        icon: 'task_alt',
        defaultValue: false,
        settings: {},
      },
      readOnly: {
        label: 'Campo de solo lectura',
        styleClasses: 'px-2 box-border md:w-1/4',
        type: EControlTypes.checkbox,
        icon: 'edit_off',
        defaultValue: false,
        settings: {},
      },
      hidden: {
        label: 'Campo escondido',
        icon: 'visibility_off',
        styleClasses: 'px-2 box-border md:w-1/4',
        type: EControlTypes.checkbox,
        defaultValue: false,
        settings: {},
      },
      disabled: {
        label: 'Campo desactivado',
        styleClasses: 'px-2 box-border md:w-1/4',
        type: EControlTypes.checkbox,
        icon: 'block',
        defaultValue: false,
        settings: {},
      },
      errorMessages: {
        type: EControlTypes.array,
        label: 'Mensajes de error',
        settings: {
          withFormHeader: true,
          withActionButtons: true,
          formFields: {
            key: {
              type: EControlTypes.input,
              label: 'Key',
              styleClasses: 'col-span-12 md:col-span-6',
              required: true,
            },
            value: {
              type: EControlTypes.input,
              label: 'value',
              styleClasses: 'col-span-12 md:col-span-6',
              required: true,
            },
          },
        },
      },
    };
  }

  public getField(
    {
      disabled,
      errorMessages,
      hidden,
      icon,
      label,
      length,
      name,
      placeholder,
      readOnly,
      required,
      tooltip,
      type,
    }: IFieldFormData,
    settings: AllControlSettings
  ): IFormStructure {
    return {
      [name || 'default']: {
        type,
        settings,
        disabled,
        hidden,
        icon: icon?.name,
        label,
        length,
        placeholder,
        readOnly,
        required,
        tooltip,
        errorMessages: errorMessages.reduce(
          (prev, curr) => ({ ...prev, [curr.key]: curr.value }),
          {}
        ),
      },
    };
  }
}
