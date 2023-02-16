import { IDropdownSettings } from '@lib/components/special-dropdown/special-dropdown.interface';
import { ILabelSettings } from '@lib/components/special-label/special-label.interface';
import { EControlTypes } from '@lib/core/aux-data/control-types.enum';
import { IFormStructure } from '@lib/core/interfaces/form.interfaces';
import { of } from 'rxjs';

import { CommonFormClass } from './common.form';
import { CommonFormCreator } from './common.form.interface';

export class LabelFormClass
  extends CommonFormClass
  implements CommonFormCreator
{
  public settingsFields(): IFormStructure {
    return {
      isLink: {
        label: 'Ideterminado',
        type: EControlTypes.checkbox,
      },
    };
  }

  public getSettings({ isLink }: { isLink: boolean }): ILabelSettings {
    return {
      isLink,
      onClickLink: () => {
        console.log('LINK');
      },
      pipe: () => 'value',
      stylesPipe: () => '',
    };
  }
}
