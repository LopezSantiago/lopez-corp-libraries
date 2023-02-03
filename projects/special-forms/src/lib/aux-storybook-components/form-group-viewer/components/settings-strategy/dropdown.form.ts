import { IDropdownSettings } from '@lib/components/special-dropdown/special-dropdown.interface';
import { EControlTypes } from '@lib/core/aux-data/control-types.enum';
import { IFormStructure } from '@lib/core/interfaces/form.interfaces';
import { of } from 'rxjs';

import { CommonFormClass } from './common.form';
import { CommonFormCreator } from './common.form.interface';

interface IDropdownSettingsFormData {
  source: { id: string; name: string }[];
  notSelectedText: string;
  icon: { name: string };
}
export class DropDownFormClass
  extends CommonFormClass
  implements CommonFormCreator
{
  public settingsFields(): IFormStructure {
    return {
      source: {
        label: 'Data del campo',
        styleClasses: 'px-2 box-border md:w-2/4',
        type: EControlTypes.array,
        settings: {
          withActionButtons: true,
          withFormHeader: true,
          formFields: {
            id: {
              type: EControlTypes.input,
              label: 'Id',
              styleClasses: 'col-span-12 md:col-span-6',
              required: true,
            },
            name: {
              type: EControlTypes.input,
              label: 'Nombre',
              styleClasses: 'col-span-12 md:col-span-6',
              required: true,
            },
          },
        },
      },
      fieldId: {
        type: EControlTypes.default,
        defaultValue: 'id',
      },
      fieldName: {
        type: EControlTypes.default,
        defaultValue: 'name',
      },
      notSelectedText: {
        placeholder: '',
        label: 'Label de no seleccion',
        styleClasses: 'px-2 box-border md:w-2/4',
        type: EControlTypes.input,
      },
      icon: this.iconField('Icono derecho'),
    };
  }

  public getSettings({
    icon,
    notSelectedText,
    source,
  }: IDropdownSettingsFormData): IDropdownSettings {
    return {
      source: of(source),
      fieldId: 'id',
      fieldName: 'name',
      notSelectedText,
      icon: icon?.name,
      iconAction: (value) => {
        console.log('ICON ACTION ' + value);
      },
      onSelect: (value) => {
        console.log('ICON ACTION ' + value);
      },
    };
  }
}
