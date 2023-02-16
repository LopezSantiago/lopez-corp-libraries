import { ITextAreaSettings } from '@lib/components/special-text-area/special-text-area.interface';
import { IFormStructure } from '@lib/core/interfaces/form.interfaces';
import { CommonFormClass } from './common.form';
import { CommonFormCreator } from './common.form.interface';

export class TextAreaFormClass
  extends CommonFormClass
  implements CommonFormCreator
{
  public settingsFields(): IFormStructure {
    return {};
  }

  public getSettings({}): ITextAreaSettings {
    return {};
  }
}
