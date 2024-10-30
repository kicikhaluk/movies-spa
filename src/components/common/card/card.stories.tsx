import type { Meta, StoryObj } from '@storybook/react';

import { default as CardComp } from './card.component';

const meta: Meta<typeof CardComp> = {
  title: 'Components/Common/Card',
  component: CardComp,
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: [
      <CardComp.Cover
        src='https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg'
        alt='cover'
      />,
      <CardComp.Meta>
        <h3>Pokémon: Detective Pikachu</h3>
        <p>Realesed: 10 May 2019</p>
        <p>imdbID:tt5884052</p>
        <p>imdbID:tt5884052</p>
        <p>Language: English, Japanese</p>
      </CardComp.Meta>,
    ],
  },
};

export default meta;

type Story = StoryObj<typeof CardComp>;

export const Card: Story = {};
