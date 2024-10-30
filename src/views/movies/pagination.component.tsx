import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useLazyGetMoviesQuery } from '@/api/movie.api';
import { serializeQueryParams } from '@/helpers/serializeQueryParams';
import { useAppSelector } from '@/stores';

import styles from './movies.module.scss';
import { Button } from '@/components';

const DEFAULT_PAGE_SIZE = 10;

const Pagination = () => {
  const { total } = useAppSelector((state) => state.movies);
  const [searchParams] = useSearchParams();
  const totalPage = Math.floor(total / DEFAULT_PAGE_SIZE);
  const [trigger] = useLazyGetMoviesQuery();
  const [page, setPage] = React.useState(0);

  const prevPage = () => {
    if (page === 0) {
      return;
    }
    setPage(page - 1);
    trigger(serializeQueryParams(searchParams, [`page=${page - 1}`]));
  };

  const nextPage = () => {
    if (page === totalPage) {
      return;
    }
    setPage(page + 1);
    trigger(serializeQueryParams(searchParams, [`page=${page + 1}`]));
  };

  return (
    <div className={styles.pagination}>
      <Button.Icon
        icon={'<'}
        aria-label='Previous Page'
        onClick={prevPage}
      ></Button.Icon>
      <div>
        <span>Page</span>
        <ul>
          <li>{page + 1}</li>
        </ul>
        <span>of {totalPage}</span>
      </div>
      <Button.Icon
        icon={'>'}
        aria-label='Next Page'
        onClick={nextPage}
      ></Button.Icon>
    </div>
  );
};

export default Pagination;
