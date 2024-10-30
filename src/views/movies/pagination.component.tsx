import { useSearchParams } from 'react-router-dom';

import { useLazyGetMoviesQuery } from '@/api/movie.api';
import { serializeQueryParams } from '@/helpers/serializeQueryParams';
import { useAppSelector } from '@/stores';

import styles from './movies.module.scss';
import { Button } from '@/components';

const DEFAULT_PAGE_SIZE = 10;

const Pagination = () => {
  const { total } = useAppSelector((state) => state.movies);
  const [searchParams, setSearchParams] = useSearchParams();
  const [trigger] = useLazyGetMoviesQuery();
  const totalPage = Math.floor(total / DEFAULT_PAGE_SIZE);
  const page = Number(searchParams.get('page'));

  const prevPage = () => {
    if (page === 1) {
      return;
    }
    setSearchParams((params) => {
      params.set('page', String(page - 1));
      return params;
    });
    trigger(serializeQueryParams(searchParams));
  };

  const nextPage = () => {
    if (page === totalPage) {
      return;
    }
    setSearchParams((params) => {
      params.set('page', String(page + 1));
      return params;
    });
    trigger(serializeQueryParams(searchParams));
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
          <li>{page}</li>
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
