import { Story, Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormControlViewerModule } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.module';
import { FormControlViewerComponent } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.component';
import { TSpecialInput } from '../../core/interfaces/form.interfaces';
import { EControlTypes } from '../../core/enums/control-types.enum';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Special input control',
  component: FormControlViewerComponent,
  decorators: [
    moduleMetadata({
      imports: [FormControlViewerModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {},
} as Meta;

const Template: Story<FormControlViewerComponent> = (
  args: FormControlViewerComponent
) => ({
  title: 'Special input control',
  template: `
    <spf-form-control-viewer
      [field]="{
        placeholder: placeholder,
        label: label,
        tooltip: tooltip,
        icon: icon,
        elementId: elementId,
        styleClasses: styleClasses,
        length: length,
        required: required,
        hidden: hidden,
        readOnly: readOnly,
        type:type,
        settings:settings,
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
  placeholder: 'HOLA',
  label: 'HOLA',
  tooltip: 'HOLA',
  icon: 'accessible',
  elementId: 'HOLA',
  styleClasses: 'HOLA',
  length: 0,
  required: true,
  hidden: true,
  readOnly: true,
  errorMessages: {},
  asyncValidators: null,
  defaultValue: null,
  name: 'some',
  settings: {},
  type: EControlTypes.input,
  validators: null,
} as TSpecialInput;
