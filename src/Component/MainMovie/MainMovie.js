import './MainMovie.css'

function MainMovie (props) {
    const {movie} = props
    return (
        <div className='main-movie'>
            <img src={movie.poster_path} alt={movie.title}/>
            <h3>{movie.title}</h3>
            <p>⭐️ {movie.average_rating}</p>
        </div>
    )
}

export default MainMovie