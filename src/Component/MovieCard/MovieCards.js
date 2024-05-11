import './MovieCards.css'


function MovieCards(props){
    const {movie, onClick} = props
    return (
      <div className="movie-cards" onClick={onClick}>
        <img src={movie.poster_path} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>⭐️ {movie.average_rating.toFixed(2)}</p>
      </div>
    );
  };
  
 
  export default MovieCards;
