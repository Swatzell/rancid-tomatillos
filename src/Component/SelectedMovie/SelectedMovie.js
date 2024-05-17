import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SelectedMovie.css';

function SelectedMovie(props) {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(props.movie || null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!props.movie) {
      handleMovieSelection(movieID);
    }
  }, [movieID, props.movie]);

  const handleMovieSelection = async (id) => {
    try {
      const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
      const data = await response.json();
      setMovie(data.movie);
    } catch (error) {
      setError(true);
    }
  };

  if (error) {
    return <div>Error: Failed to fetch movie details. Please try again later.</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  const genres = movie.genres.join(', ');
  const backdropStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${movie.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className='selectedMovie' style={backdropStyle}>
      <div className='poster'>
        <img src={movie.poster_path} alt={movie.title} />
      </div>
      <div className='movieSpecs'>
        <h3>{movie.title}</h3>
        <h4>⭐️ {movie.average_rating.toFixed(2)}</h4>
        <h4>Released: {movie.release_date}</h4>
        <div>
          <p>Genres: {genres}</p>
          <p>Overview: {movie.overview}</p>
          <p>Movie Length: {movie.runtime} min.</p>
        </div>
      </div>
      <Link style={{ cursor: 'pointer' }} to='/'>Go Back!</Link>
    </div>
  );
}

export default SelectedMovie;
