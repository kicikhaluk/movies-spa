import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { Button } from '@/components';

import { useLazyGetMoviesQuery } from '@/api/movie.api';

import { getQueryParamsFromSearch } from '@/helpers/getQueryParamsFromSearch';

import 'react-datepicker/dist/react-datepicker.css';
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
          isClearable
          selected={formState.y ? new Date(formState.y) : null}
          showYearPicker
          placeholderText='Year'
          dateFormat='yyyy'
        />
        <select
          name='type'
          onChange={onChangeHandler}
          value={formState.type}
          className={styles.filter}
        >
          <option value=''>Type</option>
          <option value='movie'>Movies</option>
          <option value='series'>TV Series</option>
          <option value='episode'>Episode</option>
        </select>
        <div className={styles.input_wrapper}>
          <input
            type='search'
            name='s'
            className={styles.input}
            value={formState.s}
            onChange={onChangeHandler}
            placeholder='Search Movie Name'
            required
          />
        </div>
        <Button type='submit' label='Search' />
      </div>
    </form>
  );
};

export default Search;
