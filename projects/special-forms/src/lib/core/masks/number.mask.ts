import { createMask } from '@ngneat/input-mask';

export const numberMask = (max = 1000) =>
  createMask({ alias: 'numeric', min: 0, max });
