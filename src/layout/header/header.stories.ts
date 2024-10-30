import type { Meta, StoryObj } from '@storybook/react';

import { default as HeaderComp } from './header.layout';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: HeaderComp,
};

export default meta;

type Story = StoryObj<typeof HeaderComp>;

export const Header: Story = {};
