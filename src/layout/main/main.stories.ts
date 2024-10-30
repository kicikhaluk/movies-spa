import type { Meta, StoryObj } from '@storybook/react';

import { default as MainComp } from './main.layout';

const meta: Meta<typeof MainComp> = {
  title: 'Layout/Main',
  component: MainComp,
};

export default meta;

type Story = StoryObj<typeof MainComp>;

export const Main: Story = {};
