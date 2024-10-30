import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

import { Button, DatePicker, Input, Select } from '@/components';

import { useLazyGetMoviesQuery } from '@/api/movie.api';

import { getQueryParamsFromSearch } from '@/helpers/getQueryParamsFromSearch';

import styles from './search.module.scss';

const Search = () => {
  const [trigger] = useLazyGetMoviesQuery();
  const [, setSearchParams] = useSearchParams();
  const [formState, setFormState] = React.useState({
    type: '',
    s: '',
    y: '',
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    setFormState({
      ...formState,
      [name]: e.target.value,
    });
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = { ...formState, page: '1' };
    trigger(getQueryParamsFromSearch(params));
    setSearchParams(params);
  };

  React.useEffect(() => {
    trigger(['s=pokemon&page=1']);
    setSearchParams({ s: 'pokemon', page: '1' });
  }, []);

  return (
    <form className={styles.search} onSubmit={submitForm}>
      <div className={styles.search_wrapper}>
        <DatePicker
          name='year'
          onChange={(date) => {
            setFormState({
              ...formState,
              y: String(date ? date.getFullYear() : ''),
            });
          }}
          selected={formState.y ? new Date(formState.y) : null}
        />
        <Select name='type' onChange={onChangeHandler} value={formState.type}>
          <option value=''>Type</option>
          <option value='movie'>Movies</option>
          <option value='series'>TV Series</option>
          <option value='episode'>Episode</option>
        </Select>
        <Input
          type='search'
          name='s'
          value={formState.s}
          onChange={onChangeHandler}
          placeholder='Search Movie Name'
          required
          wrapperClassName={styles.input_wrapper}
        />
        <Button type='submit' variant='primary' label='Search' />
      </div>
    </form>
  );
};

export default Search;
