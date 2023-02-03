
import { IDatePickerSettings } from '@lib/components/special-datepicker/special-datepicker.interface';
import { EControlTypes } from '@lib/core/aux-data/control-types.enum';
import { IFormStructure } from '@lib/core/interfaces/form.interfaces';
import { numberMask } from '@lib/core/masks/number.mask';
import { CommonFormClass } from './common.form';
import { CommonFormCreator } from './common.form.interface';

interface IDatePickerSettingsFormData {
  lowerLimit: number;
  upperLimit: number;
  startAt: Date;
}
export class DatePickerFormClass
  extends CommonFormClass
  implements CommonFormCreator
{
  public settingsFields(): IFormStructure {
    return {
      lowerLimit: {
        label: 'Límite inferior',
        styleClasses: 'px-2 box-border md:w-2/4',
        type: EControlTypes.input,
        settings: {
          mask: numberMask(10000000000000),
        },
      },
      upperLimit: {
        label: 'Límite superior',
        styleClasses: 'px-2 box-border md:w-2/4',
        type: EControlTypes.input,
        settings: {
          mask: numberMask(10000000000000),
        },
      },
      startAt: {
        label: 'Empezar en',
        styleClasses: 'px-2 box-border md:w-2/4',
        type: EControlTypes.dropdown,
      },
      icon: this.iconField('Icono derecho'),
    };
  }

  public getSettings({
    lowerLimit,
    startAt,
    upperLimit,
  }: IDatePickerSettingsFormData): IDatePickerSettings {
    return {
      lowerLimit,
      startAt,
      upperLimit,
    };
  }
}
