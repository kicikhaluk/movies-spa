import { useSearchParams } from 'react-router-dom';

import { Button, Stack, Text } from '@/components';
import {
  ArrowBackCircleOutline,
  ArrowForwardCircleOutline,
} from '@/components/icons';

import { useLazyGetMoviesQuery } from '@/api/movie.api';
import { serializeQueryParams } from '@/helpers/serializeQueryParams';
import { useAppSelector } from '@/stores';

import styles from './movies.module.scss';

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
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='flex-end'
      spacing={2}
      className={styles.pagination}
    >
      <Button.Icon
        icon={<ArrowBackCircleOutline />}
        aria-label='Previous Page'
        onClick={prevPage}
      ></Button.Icon>
      <Stack direction='row' spacing={1}>
        <Text size='lg' variant='white'>
          Page
        </Text>
        <Stack as='ul'>
          <li>
            <Text size='lg' variant='white'>
              {page}
            </Text>
          </li>
        </Stack>
        <Text size='lg' variant='white'>
          of {totalPage}
        </Text>
      </Stack>
      <Button.Icon
        icon={<ArrowForwardCircleOutline />}
        aria-label='Next Page'
        onClick={nextPage}
      ></Button.Icon>
    </Stack>
  );
};

export default Pagination;
