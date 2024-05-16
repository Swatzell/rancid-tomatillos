import MainMovie from "../MainMovie/MainMovie"
import MovieCards from "../MovieCard/MovieCards"

function MainPage(props){
    const {movies} = props
    return(
        <>
            {<MainMovie movie={movies[0]} onClick={() => handleMovieSelection(movies[0].id)} />}  
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
        </>
    )
}

export  default MainPage