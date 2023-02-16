import { Story, Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormControlViewerModule } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.module';
import { FormControlViewerComponent } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { ICONS_CONTROL } from '../../core/controls';
import { MasksEnum } from '../../core/masks/maks.enum';
import { FieldBasicData } from '../../core/aux-data/field-basic-data';
import { THEMES_CONTROL } from '../../core/controls/theme.control';
import { InputTypes } from '@lib/core/aux-data/input-types';

export default {
  title: 'Special input control',
  component: FormControlViewerComponent,
  decorators: [
    moduleMetadata({
      imports: [FormControlViewerModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    icon: ICONS_CONTROL,
    icon2: ICONS_CONTROL,
    theme: THEMES_CONTROL,
    length: { control: { type: 'range', min: 1, max: 100, step: 5 } },
    mask: {
      control: 'select',
      options: [null, MasksEnum.currency, MasksEnum.numeric],
    },
    inputType: {
      control: 'select',
      options: InputTypes,
    },
  },
} as Meta;

const Template: Story<FormControlViewerComponent> = (
  args: FormControlViewerComponent
) => ({
  title: 'Special input control',
  template: `
    <spf-form-control-viewer
      [theme]="theme"
      [input]="{
        placeholder: placeholder,
        label: label,
        tooltip: tooltip,
        icon: icon,
        elementId: elementId,
        styleClasses: styleClasses,
        length: length,
        defaultValue: defaultValue,
        required: required,
        hidden: hidden,
        readOnly: readOnly,
        disabled: disabled,
        type: type,
        errorMessages: errorMessages,
        settings:{
          icon:icon2,
          mask:mask,
          type:inputType
        }
      }"
      >
    </spf-form-control-viewer>`,
  props: {
    ...args,
    type: EControlTypes.input,
  },
});

export const light = Template.bind({});
light.args = {
  ...FieldBasicData,
  theme: 'light-theme',
  defaultValue: 'Default',
  icon2: 'search',
  mask: null,
  inputType: 'text',
};

export const dark = Template.bind({});
dark.args = {
  ...FieldBasicData,
  theme: 'dark-theme',
  defaultValue: 'Default',
  icon2: 'search',
  mask: null,
  inputType: 'text',
};
