import { Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControlViewerModule } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.module';
import { FormControlViewerComponent } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.component';
import { ICONS_CONTROL } from '../../core/controls/icons.control';
import { action } from '@storybook/addon-actions';
import { countries } from '../../core/aux-data/countries';

export default {
  title: 'Special autocomplete control',
  component: FormControlViewerComponent,
  decorators: [
    moduleMetadata({
      imports: [FormControlViewerModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    icon: ICONS_CONTROL,
  },
} as Meta;

export const light = (args: any) => ({
  title: 'Special autocomplete control',
  template: `
  <spf-form-control-viewer
    (getData)="getData($event)"
    [autocomplete]="{
      placeholder: placeholder,
      label: label,
      tooltip: tooltip,
      icon: icon,
      elementId: elementId,
      styleClasses: styleClasses,
      length: 0,
      required: required,
      hidden: false,
      readOnly: readOnly,
      defaultValue:defaultValue,
      type:'AUTOCOMPLETE',
      settings:{
        fieldId: fieldId,
        fieldName:fieldName,
        source:source
      },
      errorMessages: errorMessages
    }"
    >
  </spf-form-control-viewer>`,
  props: {
    ...args,
    getData: action('Get data'),
  },
});

light.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  tooltip: 'Tooltip',
  icon: 'accessible',
  elementId: 'Element-id',
  styleClasses: '',
  required: true,
  readOnly: false,
  errorMessages: {},
  asyncValidators: null,
  validators: null,
  defaultValue: { name: 'Colombia', code: 'CO' },
  fieldName: 'name',
  fieldId: 'code',
  source: countries(),
};
