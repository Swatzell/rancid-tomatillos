import  './SelectedMovie.css'

function SelectedMovie(props) {
    const { movie, onBack } = props;
    const genres = movie.genres.join(', ')
    return (
      <div className='selectedMovie'>
        <div className='imagesContainer'>
          <div className='poster'>
            <img src={movie.poster_path} alt={movie.title} />
          </div>
          <div className='backdrop'>
            <img src={movie.backdrop_path} alt={movie.title} />
          </div>
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
        <span style={{ cursor: 'pointer' }} onClick={onBack}>Go Back!</span>
      </div>
    );
}

export default SelectedMovie