import { IAutocompleteSettings } from '@lib/components/special-autocomplete/special-autocomplete.interface';
import { EControlTypes } from '@lib/core/aux-data/control-types.enum';
import { IFormStructure } from '@lib/core/interfaces/form.interfaces';
import { Subject } from 'rxjs';
import { CommonFormClass } from './common.form';
import { CommonFormCreator } from './common.form.interface';

interface IAutocompleteSettingsFormData {
  source: { id: string; name: string; image?: string }[];
  icon: { name: string };
}
export class AutocompleteFormClass
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
              label: 'id',
              styleClasses: 'col-span-12 md:col-span-4',
              required: true,
            },
            name: {
              type: EControlTypes.input,
              label: 'Nombre',
              styleClasses: 'col-span-12 md:col-span-4',
              required: true,
            },
            image: {
              type: EControlTypes.input,
              label: 'Imagen',
              styleClasses: 'col-span-12 md:col-span-4',
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
      fieldImage: {
        type: EControlTypes.default,
        defaultValue: 'image',
      },
      icon: this.iconField('Icono derecho'),
    };
  }
  public getSettings({
    icon,
    source,
  }: IAutocompleteSettingsFormData): IAutocompleteSettings {
    const source$ = new Subject<any[]>();

    return {
      source: source$.asObservable(),
      getData: (query) => {
        const filteredData = source
          .filter((item) => item.name.includes(query))
          .slice(0, 10);

        source$.next(filteredData);
      },
      fieldId: 'id',
      fieldName: 'name',
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
