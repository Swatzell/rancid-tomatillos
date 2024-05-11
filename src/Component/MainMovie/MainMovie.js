import './MainMovie.css'

function MainMovie (props) {
    const {movie,onClick} = props
    return (
        <div className='main-movie' onClick={onClick}>
            <img src={movie.poster_path} alt={movie.title}/>
            <h3>{movie.title}</h3>
            <p>⭐️ {movie.average_rating.toFixed(2)}</p>
        </div>
    )
}

export default MainMovie