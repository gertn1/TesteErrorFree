import { Meta, StoryFn } from '@storybook/react';

import { Button } from '.';
import { Props } from '~/@types/components/button.ts';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta<Props>;

const Template: StoryFn<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'test',
  disabled: false,
};
