import './MovieCards.css'


function MovieCards({ movie }){
    return (
      <div className="movie-cards">
        <img src={movie.poster_path} alt={movie.title} />
      </div>
    );
  };
  
 
  export default MovieCards;
