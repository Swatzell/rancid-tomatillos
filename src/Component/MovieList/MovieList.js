import MovieCard from "../MovieCard/MovieCards";

function MovieList(props) {
    const { movies, selectedMovie } = props; 
    console.log({movies})
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