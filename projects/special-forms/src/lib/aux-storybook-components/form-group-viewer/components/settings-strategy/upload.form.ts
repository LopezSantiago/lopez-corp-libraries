import { IUploadSettings } from '@lib/components/special-upload/special-upload.interface';
import { EControlTypes } from '@lib/core/aux-data/control-types.enum';
import { IFormStructure } from '@lib/core/interfaces/form.interfaces';
import { CommonFormClass } from './common.form';
import { CommonFormCreator } from './common.form.interface';

export class UploadFormClass
  extends CommonFormClass
  implements CommonFormCreator
{
  public settingsFields(): IFormStructure {
    return {
      accept: {
        label: 'Documentos aceptados',
        styleClasses: 'px-2 box-border md:w-2/4',
        type: EControlTypes.input,
        settings: {},
      },
      multiple: {
        label: 'Multiple',
        type: EControlTypes.checkbox,
      },
    };
  }

  public getSettings({
    accept,
    multiple,
  }: IUploadSettings): IUploadSettings {
    return {
      accept,
      multiple
    };
  }
}
