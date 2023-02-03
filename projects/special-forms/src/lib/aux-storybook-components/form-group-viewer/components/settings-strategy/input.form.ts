import { IInputSettings } from '@lib/components/special-input/special-input.interface';
import { InputTypes } from '@lib/components/special-input/special-input.stories';
import { EControlTypes } from '@lib/core/aux-data/control-types.enum';
import { IFormStructure } from '@lib/core/interfaces/form.interfaces';
import { Masks } from '@lib/core/masks/maks.enum';
import { InputmaskOptions } from '@ngneat/input-mask';
import { of } from 'rxjs';
import { CommonFormClass } from './common.form';
import { CommonFormCreator } from './common.form.interface';

interface IInputSettingsFormData {
  type: string;
  mask: InputmaskOptions<any>;
  icon: { name: string };
}
export class InputFormClass
  extends CommonFormClass
  implements CommonFormCreator
{
  public settingsFields(): IFormStructure {
    return {
      type: {
        placeholder: 'Tipo de control',
        label: 'Tipo de control',
        styleClasses: 'px-2 box-border md:w-2/4',
        type: EControlTypes.dropdown,
        settings: {
          fieldId: 'value',
          fieldName: 'value',
          source: of(InputTypes.map((type) => ({ value: type }))),
        },
      },
      mask: {
        placeholder: 'Máscara',
        label: 'Tipo de máscara',
        styleClasses: 'px-2 box-border md:w-2/4',
        type: EControlTypes.dropdown,
        settings: {
          fieldId: 'value',
          fieldName: 'key',
          notSelectedText: 'Sin máscara',
          source: of(
            Object.entries(Masks).map(([key, value]) => ({ key, value }))
          ),
        },
      },
      icon: this.iconField('Icono derecho'),
    };
  }

  public getSettings({
    icon,
    mask,
    type,
  }: IInputSettingsFormData): IInputSettings {
    return {
      mask,
      onBlur: (value) => {
        console.log('ON BLUR ' + value);
      },
      onEnter: (value) => {
        console.log('ON ENTER ' + value);
      },
      icon: icon?.name,
      iconAction: (value) => {
        console.log('ICON ACTION ' + value);
      },
      type,
    };
  }
}
