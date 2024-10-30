import { type IMovie, useGetMovieByIdQuery } from '@/api/movie.api';
import { Stack, VSpacer, Text, Header } from '@/components';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetMovieByIdQuery(id!);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (isError) {
    return <h1>Something Went Wrong</h1>;
  }

  const {
    Title,
    Poster,
    Released,
    Runtime,
    BoxOffice,
    imdbRating,
    Actors,
    Awards,
    Country,
    Genre,
    Language,
  } = data as IMovie;

  return (
    <>
      <VSpacer spacing='xxl' />
      <Stack direction='row' spacing={4}>
        <Stack>
          <img src={Poster} alt='Movie Poster' />
        </Stack>
        <Stack direction='column' spacing={2}>
          <Stack direction='row' alignItems='center' spacing={2}>
            <Header as='h3' isUppercase>
              {Title}
            </Header>
            <Text>Rating: {imdbRating}</Text>
          </Stack>
          <Text>{Genre}</Text>
          <Stack direction='row' alignItems='center' spacing={4}>
            <Text>{Released}</Text>
            <Text>{Runtime}</Text>
          </Stack>
          <Text>{BoxOffice}</Text>
          <Text>Actors: {Actors}</Text>
          <Text>Awards: {Awards}</Text>
          <Text>Countries: {Country}</Text>
          <Text>Languages:{Language}</Text>
        </Stack>
      </Stack>
      <VSpacer spacing='lg' />
    </>
  );
};

export default MovieDetail;
