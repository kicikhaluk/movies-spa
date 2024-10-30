import { Grid, MovieCard } from '@/components';

import { useAppSelector } from '@/stores';

const MoviesGrid = () => {
  const { movies } = useAppSelector((state) => state.movies);

  return (
    <Grid>
      {movies.map((m) => (
        <Grid.Item key={m.imdbID}>
          <MovieCard
            title={m.Title}
            imgSrc={m.Poster}
            movieId={m.imdbID}
            type={m.Type}
            year={m.Year}
          />
        </Grid.Item>
      ))}
    </Grid>
  );
};

export default MoviesGrid;
