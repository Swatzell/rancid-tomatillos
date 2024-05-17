import MovieCard from "../MovieCard/MovieCards";

function MovieList(props) {
    const { movies, selectedMovie } = props; 
    if (!movies || movies.length === 0) {
        return <p>No movies available</p>;
      }
    
    return (
        <div className="movie-container">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClick={() => selectedMovie(movie.id)} 
                />
            ))}
        </div>
    );
}
export default MovieList