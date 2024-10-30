import { Link } from 'react-router-dom';
import { Card } from '../common/card';

interface IMoviesCard {
  imgSrc: string;
  title: string;
  year: string;
  movieId: string;
  type: string;
}

const MovieCard = ({ movieId, imgSrc, title, type, year }: IMoviesCard) => {
  return (
    <Link to={movieId}>
      <Card>
        <Card.Cover src={imgSrc} alt='Poster' />
        <Card.Meta>
          <p>{title}</p>
          <p>{type}</p>
          <p>{year}</p>
        </Card.Meta>
      </Card>
    </Link>
  );
};

export default MovieCard;
