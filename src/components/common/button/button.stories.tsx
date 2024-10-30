import type { Meta, StoryObj } from '@storybook/react';

import { default as ButtonComp } from './button.component';

const meta: Meta<typeof ButtonComp> = {
  title: 'Components/Common/Button',
  component: ButtonComp,
};

export default meta;

type Story = StoryObj<typeof ButtonComp>;

export const Button: Story = {};
