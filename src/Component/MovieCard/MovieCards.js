import './MovieCards.css'

function movieCards({ imagePath }){
    return (
      <div className='movie-card'>
       <img src={imagePath} alt="Movie Poster"/>
      </div>
    )
  }
  export default movieCards;
