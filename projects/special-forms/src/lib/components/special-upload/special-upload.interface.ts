import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { IFieldData } from '../../core/interfaces/field-basics.interfaces';

export type IUploadSettings = {
  accept?: string,
  multiple?: boolean
};

export interface IUploadField extends IFieldData {
  settings: IUploadSettings;
  type: EControlTypes.upload;
}
