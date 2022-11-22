import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControlViewerModule } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.module';
import { FormControlViewerComponent } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.component';
import { ICONS_CONTROL } from '../../core/controls/icons.control';
import { action } from '@storybook/addon-actions';
import { countries } from '../../core/aux-data/countries';
import { FieldBasicData } from '../../core/aux-data/field-basic-data';
import { THEMES_CONTROL } from '../../core/controls/theme.control';
import { EControlTypes } from '../../core/aux-data/control-types.enum';

export default {
  title: 'Special multiple autocomplete control',
  component: FormControlViewerComponent,
  decorators: [
    moduleMetadata({
      imports: [FormControlViewerModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    icon: ICONS_CONTROL,
    theme: THEMES_CONTROL,
  },
} as Meta;

const Template: Story<FormControlViewerComponent> = (
  args: FormControlViewerComponent
) => ({
  title: 'Special multiple autocomplete control',
  template: `
  <spf-form-control-viewer
    (getData)="getData($event)"
    [theme]="theme"
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
      type: type,
      errorMessages: errorMessages,
      settings:{
        fieldId: fieldId,
        fieldName:fieldName,
        source:source
      }
    }"
    >
  </spf-form-control-viewer>`,
  props: {
    ...args,
    getData: action('Get data'),
    type: EControlTypes.multiple,
  },
});

export const light = Template.bind({});
light.args = {
  ...FieldBasicData,
  theme:'light',
  defaultValue: [{ name: 'Colombia', code: 'CO' }],
  fieldName: 'name',
  fieldId: 'code',
  source: countries(),
};

export const dark = Template.bind({});
dark.args = {
  ...FieldBasicData,
  theme:'dark',
  defaultValue: [{ name: 'Colombia', code: 'CO' }],
  fieldName: 'name',
  fieldId: 'code',
  source: countries(),
};
