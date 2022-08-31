import { createMask } from '@ngneat/input-mask';

export const currencyInputMask = createMask({
  alias: 'numeric',
  groupSeparator: ',',
  autoUnmask: true,
  digits: 2,
  digitsOptional: false,
  prefix: '$ ',
  placeholder: '0',
});
