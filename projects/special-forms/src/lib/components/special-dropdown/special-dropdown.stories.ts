import { Story, Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { SpecialDropdownComponent } from './special-dropdown.component';
import { SpecialDropdownModule } from './special-dropdown.module';

export default {
  title: 'Special dropdown control',
  component: SpecialDropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [SpecialDropdownModule],
    }),
  ],
  argTypes: {},
} as Meta;

const Template: Story<SpecialDropdownComponent> = (
  args: SpecialDropdownComponent
) => ({
  title: 'Special dropdown control',
  component: SpecialDropdownComponent,
  props: {
    ...args,
  },
});

export const light = Template.bind({});
light.args = {};
