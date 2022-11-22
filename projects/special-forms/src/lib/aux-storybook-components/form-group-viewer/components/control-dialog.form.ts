import { EControlTypes } from '../../../core/aux-data/control-types.enum';
import { IFormStructure } from '../../../core/interfaces/form.interfaces';
import { map, of, Subject, Subscription } from 'rxjs';
import { EnumToArray } from '../../../core/utils/enum-to-array.util';
import { numberMask } from '../../../core/masks/number.mask';
import { ICON_NAMES } from '../../../core/aux-data/all-icons';
import { countries } from '../../../core/aux-data/countries';

const icons1Sub = new Subject<any[]>();
const country = new Subject<any[]>();

const icons2Sub = new Subject<any[]>();

const inputSettingsFields = (): IFormStructure => ({
  icon: {
    placeholder: 'Buscar',
    label: 'Icono derecho',
    tooltip: 'Selecciona una opción',
    icon: 'format_italic',
    type: EControlTypes.autocomplete,
    settings: {
      fieldId: 'name',
      fieldName: 'name',
      source: icons2Sub.asObservable(),
      getData: (query) => {
        const filteredIcons = ICON_NAMES.filter((icon) => icon.includes(query))
          .slice(0, 10)
          .map((icon) => ({ name: icon }));
        icons2Sub.next(filteredIcons);
      },
    },
  },
});

export const ControlsForm = (): IFormStructure => ({
  type: {
    placeholder: 'Selecciona el tipo de control',
    label: 'Tipo de control',
    styleClasses: 'px-2 box-border',
    icon: 'sports_esports',
    required: true,
    type: EControlTypes.dropdown,
    settings: {
      fieldId: 'value',
      fieldName: 'value',
      source: of(EnumToArray(EControlTypes)),
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
  // country: {
  //   placeholder: 'Buscar',
  //   label: 'Pais',
  //   tooltip: 'Selecciona una opción',
  //   styleClasses: 'px-2 box-border md:w-2/4',
  //   icon: 'format_italic',
  //   type: EControlTypes.multiple,
  //   settings: {
  //     icon: 'airplanemode_active',
  //     fieldId: 'name',
  //     fieldName: 'name',
  //     onSelect: (country) => {
  //       console.log(country);
  //     },
  //     iconAction: (country) => {
  //       console.log(country);
  //     },
  //     fieldImage: (country) =>
  //       `https://www.worldometers.info/img/flags/${country.code.toLowerCase()}-flag.gif`,
  //     source: country.asObservable(),
  //     getData: (query) => {
  //       countries()
  //         .pipe(
  //           map((countries) =>
  //             countries.filter((country) => country.name.includes(query))
  //           )
  //         )
  //         .subscribe((filteredData) => {
  //           country.next(filteredData);
  //         });
  //     },
  //   },
  // },
  icon: {
    placeholder: 'Buscar',
    label: 'Icono',
    tooltip: 'Selecciona una opción',
    styleClasses: 'px-2 box-border md:w-2/4',
    icon: 'format_italic',
    type: EControlTypes.autocomplete,
    settings: {
      fieldId: 'name',
      fieldName: 'name',
      source: icons1Sub.asObservable(),
      getData: (query) => {
        const filteredIcons = ICON_NAMES.filter((icon) => icon.includes(query))
          .slice(0, 10)
          .map((icon) => ({ name: icon }));
        icons1Sub.next(filteredIcons);
      },
    },
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
  settings: {
    type: EControlTypes.form,
    label: 'Configuraciones del campo',
    settings: {
      formFields: inputSettingsFields(),
    },
  },
  errorMessages: {
    type: EControlTypes.array,
    label: 'Mensajes de error',
    settings: {
      withFormHeader: false,
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
  // type: {
  // placeholder: string;
  // label: string;
  // tooltip: string;
  // icon: string;
  // elementId: string;
  // styleClasses: string;
  // length: number;
  // required: boolean;
  // hidden: boolean;
  // readOnly: boolean;
  // disabled: boolean;
  // errorMessages: { [key: string]: string };
  // },
});
