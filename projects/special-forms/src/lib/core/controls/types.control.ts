import { EControlTypes } from '../aux-data/control-types.enum';
import { EnumToArray } from '../utils/enum-to-array.util';

export const TYPES_CONTROL = {
  options: EnumToArray(EControlTypes),
  control: {
    type: 'select',
  },
};
