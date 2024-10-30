import { Table } from '@/components';

import { useAppSelector } from '@/stores';

const MoviesTable = () => {
  const { movies } = useAppSelector((state) => state.movies);

  return <Table data={movies} />;
};

export default MoviesTable;
