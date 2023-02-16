import { Story, Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormControlViewerModule } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.module';
import { FormControlViewerComponent } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { ICONS_CONTROL } from '../../core/controls';
import { FieldBasicData } from '../../core/aux-data/field-basic-data';
import { THEMES_CONTROL } from '../../core/controls/theme.control';

export default {
  title: 'Special text area control',
  component: FormControlViewerComponent,
  decorators: [
    moduleMetadata({
      imports: [FormControlViewerModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    icon: ICONS_CONTROL,
    theme: THEMES_CONTROL,
    length: { control: { type: 'range', min: 1, max: 100, step: 5 } },
  },
} as Meta;

const Template: Story<FormControlViewerComponent> = (
  args: FormControlViewerComponent
) => ({
  title: 'Special text area control',
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
        readOnly: readOnly,
        disabled: disabled,
        type: type,
        errorMessages: errorMessages
      }"
      >
    </spf-form-control-viewer>`,
  props: {
    ...args,
    type: EControlTypes.textArea,
  },
});

export const light = Template.bind({});
light.args = {
  ...FieldBasicData,
  theme: 'light-theme',
  defaultValue: 'Default',
};

export const dark = Template.bind({});
dark.args = {
  ...FieldBasicData,
  theme: 'dark-theme',
  defaultValue: 'Default',
};
