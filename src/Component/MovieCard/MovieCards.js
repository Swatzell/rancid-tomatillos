import './MovieCards.css'


function MovieCards(props){
    const {movie, onClick} = props
    const handleClick = (event) =>{
      event.stopPropagation();
      onClick()
    }
    return (
      <div className="movie-cards" onClick={handleClick}>
        <img src={movie.poster_path} alt={`${movie.title} poster`} />
        <h3>{movie.title}</h3>
        <p>⭐️ {movie.average_rating.toFixed(2)}</p>
      </div>
    );
  };
  
 
  export default MovieCards;
