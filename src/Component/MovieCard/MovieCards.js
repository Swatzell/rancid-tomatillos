import './MovieCards.css'


function MovieCards(props){
    const {movie} = props
    return (
      <div className="movie-cards">
        <img src={movie.poster_path} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>⭐️ {movie.average_rating}</p>
      </div>
    );
  };
  
 
  export default MovieCards;
