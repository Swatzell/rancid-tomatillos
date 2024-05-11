import './App.css';
import { useState } from 'react';
import MovieCards from '../MovieCard/MovieCards.js';
import movieData from '../MockData/mockData.js';
import MainMovie from '../MainMovie/MainMovie.js'
import SelectedMovie from '../SelectedMovie/SelectedMovie.js';

function App() {
  const [movies] = useState(movieData.movies);
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [showMainMovie, setShowMainMovie] = useState(true)
  const [showMovieCards, setMovieCards]= useState(true)

  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex]
    
  function handleMovieSelection (id){
    const movie = movies.find(movie => movie.id ===id)
    setSelectedMovie(movie);
    setShowMainMovie(false)
    setMovieCards(false)
  }
  function handleBackToSelection() {
    setSelectedMovie(null);
    setShowMainMovie(true);
    setMovieCards(true);
  }

    return (
      <main className="App">
        <h1>Rancid Tomatillos</h1>
        {showMainMovie && (
          <MainMovie key ={randomMovie.id} movie={randomMovie} onClick={() => handleMovieSelection(randomMovie.id)} />
        )}
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
};
    


export default App;
