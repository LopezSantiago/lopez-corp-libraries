import { Story, Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormControlViewerModule } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.module';
import { FormControlViewerComponent } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { ICONS_CONTROL } from '../../core/controls';
import { THEMES_CONTROL } from '../../core/controls/theme.control';
import { FieldBasicData } from '../../core/aux-data/field-basic-data';

export default {
  title: 'Special checkbox control',
  component: FormControlViewerComponent,
  decorators: [
    moduleMetadata({
      imports: [FormControlViewerModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    icon: ICONS_CONTROL,
    theme: THEMES_CONTROL,
    labelPosition: { control: 'radio', options: ['before', 'after'] },
  },
} as Meta;

const Template: Story<FormControlViewerComponent> = (
  args: FormControlViewerComponent
) => ({
  title: 'Special checkbox control',
  template: `
    <spf-form-control-viewer
      [theme]="theme"
      [field]="{
        placeholder: placeholder,
        label: label,
        tooltip: tooltip,
        icon: icon,
        elementId: elementId,
        styleClasses: styleClasses,
        length: length,
        defaultValue:defaultValue,
        required: required,
        hidden: false,
        type:type,
        readOnly: readOnly,
        settings:{
          labelPosition:labelPosition,
          indeterminate:indeterminate
        },
        errorMessages: errorMessages
      }"
      >
    </spf-form-control-viewer>`,
  props: {
    ...args,
    type: EControlTypes.checkbox,
  },
});

export const light = Template.bind({});
light.args = {
  ...FieldBasicData,
  theme: 'light-theme',
  defaultValue: false,
  indeterminate: false,
  labelPosition: 'before',
};

export const dark = Template.bind({});
dark.args = {
  ...FieldBasicData,
  theme: 'dark-theme',
  defaultValue: true,
  indeterminate: false,
  labelPosition: 'before',
};
