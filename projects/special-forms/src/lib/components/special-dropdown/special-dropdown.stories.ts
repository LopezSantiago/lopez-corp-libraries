import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormControlViewerComponent } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.component';
import { FormControlViewerModule } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.module';
import { countries } from '../../core/aux-data/countries';
import { ICONS_CONTROL } from '../../core/controls';
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
  },
} as Meta;

const Template: Story<SpecialDropdownComponent> = (
  args: SpecialDropdownComponent
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
      type:'DROPDOWN',
      settings:{
        source:source,
        fieldId: fieldId,
        fieldName:fieldName,
        notSelectedText:notSelectedText
      },
      errorMessages: errorMessages
    }"
    >
  </spf-form-control-viewer>`,
  props: {
    ...args,
  },
});

export const light = Template.bind({});
light.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  tooltip: 'Tooltip',
  icon: 'accessible',
  elementId: 'Element-id',
  styleClasses: '',
  length: 0,
  required: true,
  readOnly: false,
  errorMessages: {},
  asyncValidators: null,
  validators: null,
  defaultValue: 'CO',
  notSelectedText:'Seleccione un item',
  fieldName: 'name',
  fieldId: 'code',
  source: countries(),
};

export const dark = Template.bind({});
dark.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  tooltip: 'Tooltip',
  icon: 'accessible',
  elementId: 'Element-id',
  styleClasses: 'dark',
  theme:'dark',
  length: 0,
  required: true,
  readOnly: false,
  errorMessages: {},
  asyncValidators: null,
  validators: null,
  defaultValue: 'CO',
  notSelectedText:'Seleccione un item',
  fieldName: 'name',
  fieldId: 'code',
  source: countries(),
};
