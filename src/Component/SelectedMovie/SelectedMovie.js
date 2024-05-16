import { Link } from 'react-router-dom';
import  './SelectedMovie.css'

function SelectedMovie(props) {
  const { movie, onBack } = props;
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
          <Link style={{ cursor: 'pointer' }} to= '/' >Go Back!</Link>
      </div>
  );
}


export default SelectedMovie