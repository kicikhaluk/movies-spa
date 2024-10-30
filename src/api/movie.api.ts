import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
const API_KEY = import.meta.env.VITE_API_KEY;

interface IMovieRating {
  Source: string;
  Value: string;
}

type IMovieType = 'movie' | 'series' | 'episode';

export interface IMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IMovieRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: IMovieType;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export type IMoviePreview = Pick<
  IMovie,
  'Title' | 'imdbID' | 'Type' | 'Poster' | 'Year'
>;

const mergeQuery = (query: string[] = ['s=pokemon']): string => {
  const queryStr: string = query.join('&');
  return `?apikey=${API_KEY}&${queryStr}`;
};

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINT }),
  endpoints: (builder) => ({
    getMovieById: builder.query({
      query: (id: string) => mergeQuery([`i=${id}`]),
    }),
    getMovies: builder.query({
      query: (query: string[]) => mergeQuery(query),
      transformResponse: (response: {
        Search: IMoviePreview[];
        totalResults: number;
      }) => {
        return {
          movies: response.Search,
          total: response.totalResults,
        };
      },
    }),
  }),
});

export const { useGetMovieByIdQuery, useLazyGetMoviesQuery } = movieApi;
