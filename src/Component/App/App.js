import { useEffect,useState } from 'react';
import MovieCards from '../MovieCard/MovieCards.js';
import MainMovie from '../MainMovie/MainMovie.js'
import SelectedMovie from '../SelectedMovie/SelectedMovie.js';

function App() {
  const [movies,setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showMainMovie, setShowMainMovie] = useState(true);
  const [showMovieCards, setShowMovieCards] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data.movies);
    } catch (error) {
      setError(error);
    }
  };
    
  const handleMovieSelection = async (id) => {
    try {
      const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
      const data = await response.json();
      setSelectedMovie(data.movie);
      setShowMainMovie(false);
      setShowMovieCards(false);
    } catch (error) {
      setError(error);
    }
  };  
  function handleBackToSelection() {
    setSelectedMovie(null);
    setShowMainMovie(true);
    setShowMovieCards(true);
  }

  console.log("Selected movie state:", selectedMovie);

  return (
    <main className="App">
      <h1>Rancid Tomatillos</h1>
      {error && <div>Error: Failed to fetch data. Please try again later.</div>}
      {showMainMovie && movies.length > 0 && <MainMovie movie={movies[0]} onClick={() => handleMovieSelection(movies[0].id)} />}
      {selectedMovie && <SelectedMovie movie={selectedMovie} onBack={handleBackToSelection} />}
      {showMovieCards && (
        <div className="movie-container">
          {movies.map((movie) => (
            <MovieCards
              key={movie.id}
              movie={movie}
              onClick={() => handleMovieSelection(movie.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;

