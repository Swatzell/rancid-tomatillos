import MainMovie from "../MainMovie/MainMovie"
//import MovieCards from "../MovieCard/MovieCards"
import MovieList from "../MovieList/MovieList";

function MainPage(props){
    const {movies, handleMovieSelection} = props
    return(
        <>
            <MainMovie movie={movies[0]} onClick={() => handleMovieSelection(movies[0].id)} />  
            <MovieList movies={movies} />
        </>
    )
}

export  default MainPage