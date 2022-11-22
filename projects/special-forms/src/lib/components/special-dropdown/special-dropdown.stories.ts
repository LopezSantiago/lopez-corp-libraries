import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormControlViewerComponent } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.component';
import { FormControlViewerModule } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.module';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { countries } from '../../core/aux-data/countries';
import { FieldBasicData } from '../../core/aux-data/field-basic-data';
import { ICONS_CONTROL } from '../../core/controls';
import { THEMES_CONTROL } from '../../core/controls/theme.control';
import { SpecialDropdownComponent } from './special-dropdown.component';

export default {
  title: 'Special dropdown control',
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
  title: 'Special dropdown control',
  template: `
  <spf-form-control-viewer
    [theme]="theme"
    [dropdown]="{
      placeholder: placeholder,
      label: label,
      tooltip: tooltip,
      icon: icon,
      elementId: elementId,
      styleClasses: styleClasses,
      length: length,
      required: required,
      hidden: false,
      readOnly: readOnly,
      defaultValue:defaultValue,
      type:type,
      errorMessages: errorMessages,
      settings:{
        source:source,
        fieldId: fieldId,
        fieldName:fieldName,
        notSelectedText:notSelectedText
      }
    }"
    >
  </spf-form-control-viewer>`,
  props: {
    ...args,
    type: EControlTypes.dropdown,
  },
});

export const light = Template.bind({});
light.args = {
  ...FieldBasicData,
  theme: 'light',
  defaultValue: 'CO',
  notSelectedText:'Seleccione un item',
  fieldName: 'name',
  fieldId: 'code',
  source: countries(),
};

export const dark = Template.bind({});
dark.args = {
  ...FieldBasicData,
  theme: 'dark',
  defaultValue: 'CO',
  notSelectedText:'Seleccione un item',
  fieldName: 'name',
  fieldId: 'code',
  source: countries(),
};
