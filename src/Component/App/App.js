import './App.css';
import { useState } from 'react';
import MovieCards from '../MovieCard/MovieCards.js';
import movieData from '../MockData/mockData.js';
import MainMovie from '../MainMovie/MainMovie.js'

function App() {
   
  const [movies] = useState(movieData.movies);
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex]
    
  return (
    <main className="App">
      <h1>Rancid Tomatillos</h1>
      <MainMovie movie = {randomMovie} />
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCards key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};
    


export default App;
