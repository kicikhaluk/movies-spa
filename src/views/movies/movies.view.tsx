import React from 'react';

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
      <div key='switcher'>
        <button onClick={() => switchLayout('table')}>Table</button>
        <button onClick={() => switchLayout('grid')}>Grid</button>
      </div>
      {layout === 'table' && <MoviesTable />}
      {layout === 'grid' && <MoviesGrid />}
      <Pagination key='pagination' />
    </>
  );
};

export default Movies;
