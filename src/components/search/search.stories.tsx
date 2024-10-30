import type { Meta, StoryObj } from '@storybook/react';

import { default as SearchComp } from './search.component';

const meta: Meta<typeof SearchComp> = {
  title: 'Components/Search',
  component: SearchComp,
};

export default meta;

type Story = StoryObj<typeof SearchComp>;

export const Search: Story = {};
