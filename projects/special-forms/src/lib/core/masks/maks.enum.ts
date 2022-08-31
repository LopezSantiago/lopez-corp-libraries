import { currencyInputMask } from './currency.mask';
import { numberMask } from './number.mask';

export enum MasksEnum {
  currency = 'CURRENCY',
  numeric = 'NUMERIC',
}

export const Masks = {
  [MasksEnum.currency]: currencyInputMask,
  [MasksEnum.numeric]: numberMask(1000),
};
