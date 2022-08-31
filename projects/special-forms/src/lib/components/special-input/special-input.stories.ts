import { Story, Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormControlViewerModule } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.module';
import { FormControlViewerComponent } from '../../aux-storybook-components/form-control-viewer/form-control-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { ICONS_CONTROL } from '../../core/controls';
import { MasksEnum } from '../../core/masks/maks.enum';

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
    theme: { control: 'radio', options: ['light', 'dark'] },
    length: { control: { type: 'range', min: 1, max: 100, step: 5 } },
    mask: {
      control: 'select',
      options: [null, MasksEnum.currency, MasksEnum.numeric],
    },
    inputType: {
      control: 'select',
      options: [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
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
        defaultValue:defaultValue,
        required: required,
        hidden: false,
        readOnly: readOnly,
        type:'INPUT',
        settings:{
          icon:icon2,
          mask:mask,
          type:inputType
        },
        errorMessages: errorMessages
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
  theme:'light',
  defaultValue: 'Default',
  icon2: 'accessible',
  mask: null,
  inputType: 'text',
};

export const dark = Template.bind({});
dark.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  tooltip: 'Tooltip',
  icon: 'accessible',
  elementId: 'Element-id',
  styleClasses: 'dark',
  length: 0,
  required: true,
  readOnly: false,
  errorMessages: {},
  asyncValidators: null,
  validators: null,
  theme:'dark',
  defaultValue: 'Default',
  icon2: 'accessible',
  mask: null,
  inputType: 'text',
};

