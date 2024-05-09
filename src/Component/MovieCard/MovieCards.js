import './MovieCards.css'


const movieCards = ({ movie }) => {
    return (
      <div className="movie-cards">
        <img src={movie.poster_path} alt={movie.title} />
      </div>
    );
  };
  
 
  export default movieCards;
