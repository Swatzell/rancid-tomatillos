import { Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();
  const navigate = useNavigate()

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
      setError(true);
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
      navigate(`/${id}`);
    } catch (error) {
      setError(true);
    }
  };

  const handleBackToSelection = () => {
    setSelectedMovie();
  };
console.log(selectedMovie)
  return (
    <main className="App">
      <h1>Rancid Tomatillos</h1>
      {error && <div>Error: Failed to fetch data. Please try again later.</div>}
      <Routes>
        <Route path="/" element={<MainPage movies={movies} handleMovieSelection={handleMovieSelection} />} />
        <Route path="/:movieID" element={<SelectedMovie selectedMovie ={selectedMovie} />} />
      </Routes>
    </main>
  );
}

export default App;
