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
              <h3 className='movie-title'>{movie.title}</h3>
              <h4 className='movie-rating'>⭐️ {movie.average_rating.toFixed(2)}</h4>
              <h4 className='movie-released'>Released: {movie.release_date}</h4>
              <div className='overview'>
                  <p>Genres: {genres}</p>
                  <p>Overview: {movie.overview}</p>
                  <p>Movie Length: {movie.runtime} min.</p>
              </div>
          </div>
          <span className='back-button' style={{ cursor: 'pointer' }} onClick={onBack}>Go Back!</span>
      </div>
  );
}


export default SelectedMovie