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
  title: 'Special upload control',
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
  title: 'Special upload control',
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
        type: type,
        settings: {
          accept: accept,
          multiple: multiple
        },
        errorMessages: errorMessages
      }"
      >
    </spf-form-control-viewer>`,
  props: {
    ...args,
    type: EControlTypes.upload,
  },
});

export const light = Template.bind({});
light.args = {
  ...FieldBasicData,
  label: 'Añade foto o video',
  placeholder: 'O arrastra y suelta la foto/video',
  icon: 'upload_file',
  theme: 'light-theme',
  accept: '',
  multiple: false,
  defaultValue: [],
};

export const dark = Template.bind({});
dark.args = {
  ...FieldBasicData,
  label: 'Añade foto o video',
  placeholder: 'O arrastra y suelta la foto/video',
  icon: 'upload_file',
  theme: 'dark-theme',
  accept: '',
  multiple: false,
  defaultValue: [],
};
