import { Story, Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { ICONS_CONTROL } from '../../core/controls';
import { MasksEnum } from '../../core/masks/maks.enum';
import { THEMES_CONTROL } from '../../core/controls/theme.control';
import { FormGroupViewerModule } from '../../aux-storybook-components/form-group-viewer/form-group-viewer.module';
import { FormGroupViewerComponent } from '../../aux-storybook-components/form-group-viewer/form-group-viewer.component';
import { IFormStructure } from '../../core/interfaces/form.interfaces';

export default {
  title: 'Special form group',
  component: FormGroupViewerComponent,
  decorators: [
    moduleMetadata({
      imports: [FormGroupViewerModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<FormGroupViewerComponent> = (
  args: FormGroupViewerComponent
) => ({
  title: 'Special form control',
  template: `
    <spf-form-group-viewer
      [theme]="theme"
      [fields]="fields"
      >
    </spf-form-group-viewer>`,
  props: {
    ...args,
  },
});

export const light = Template.bind({});
light.args = {

  theme: 'light',

};

export const dark = Template.bind({});
dark.args = {

  theme: 'dark',

};
