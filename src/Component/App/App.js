import './App.css';
import { useState } from 'react';
import MovieCards from '../MovieCard/MovieCards.js';
import movieData from '../MockData/mockData.js';


function App() {
   
   const [movies,] = useState(movieData.movies);
    
      return (
        <main className="App">
          <h1>Rancid Tomatillos</h1>
          <div className="movie-container">
            {movies.map((movie) => (
              <MovieCards key={movie.id} movie={movie} />
            ))}
          </div>
        </main>
      );
    };
    


export default App;
