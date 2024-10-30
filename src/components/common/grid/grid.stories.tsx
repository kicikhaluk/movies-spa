import type { Meta, StoryObj } from '@storybook/react';

import { default as GridComp } from './grid.component';

const meta: Meta<typeof GridComp> = {
  title: 'Components/Common/Grid',
  component: GridComp,
  args: {
    as: 'div',
    children: [
      <GridComp.Item>Grid Item 1</GridComp.Item>,
      <GridComp.Item>Grid Item 2</GridComp.Item>,
      <GridComp.Item>Grid Item 3</GridComp.Item>,
      <GridComp.Item>Grid Item 4</GridComp.Item>,
      <GridComp.Item>Grid Item 5</GridComp.Item>,
      <GridComp.Item>Grid Item 6</GridComp.Item>,
    ],
  },
};

export default meta;

type Story = StoryObj<typeof GridComp>;

export const Grid: Story = {};
