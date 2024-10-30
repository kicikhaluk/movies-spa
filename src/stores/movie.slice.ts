import { IMoviePreview, movieApi } from '@/api/movie.api';
import { createSlice } from '@reduxjs/toolkit';

interface MoviesState {
  movies: IMoviePreview[];
  total: number;
}

const initialState: MoviesState = {
  movies: [],
  total: 0,
};
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      movieApi.endpoints.getMovies.matchFulfilled,
      (state, { payload }) => {
        state.movies = payload.movies;
        state.total = payload.total;
      }
    );
  },
});

export default moviesSlice.reducer;
