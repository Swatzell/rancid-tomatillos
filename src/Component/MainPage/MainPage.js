import MainMovie from "../MainMovie/MainMovie"
import MovieList from "../MovieList/MovieList";

function MainPage(props){
    const {movies, handleMovieSelection} = props
    
    if (!movies || movies.length === 0) {
        return <div>Loading...</div>;
      }
        
      return (
        <>
          <MainMovie movie={movies[0]} onClick={() => handleMovieSelection(movies[0].id)} />
          <MovieList movies={movies} selectedMovie={handleMovieSelection} />
        </>
      );
}

export  default MainPage