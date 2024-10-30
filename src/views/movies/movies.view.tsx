import * as React from 'react';

import { Button, Header, Stack, VSpacer } from '@/components';
import { ListOutline, AppsOutline } from '@/components/icons';

import MoviesTable from './movies-table.container';
import MoviesGrid from './movies-grid.container';
import Pagination from './pagination.component';

const Movies = () => {
  const [layout, setLayout] = React.useState<'table' | 'grid'>('table');

  const switchLayout = (layout: 'table' | 'grid') => {
    setLayout(layout);
  };

  return (
    <>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        key='switcher'
      >
        <Header as='h3'>Movies</Header>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'
          spacing={1}
        >
          <Button.Icon
            onClick={() => switchLayout('table')}
            icon={<ListOutline />}
          />
          <Button.Icon
            onClick={() => switchLayout('grid')}
            icon={<AppsOutline />}
          />
        </Stack>
      </Stack>
      <VSpacer spacing='sm' />
      {layout === 'table' && <MoviesTable />}
      {layout === 'grid' && <MoviesGrid />}
      <VSpacer spacing='sm' />
      <Pagination key='pagination' />
    </>
  );
};

export default Movies;
