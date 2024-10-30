import type { Meta, StoryObj } from '@storybook/react';

import { default as FooterComp } from './footer.layout';

const meta: Meta<typeof FooterComp> = {
  title: 'Layout/Footer',
  component: FooterComp,
};

export default meta;

type Story = StoryObj<typeof FooterComp>;

export const Footer: Story = {};
