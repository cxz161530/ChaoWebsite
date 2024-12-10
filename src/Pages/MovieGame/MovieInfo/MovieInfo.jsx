import './MovieInfo.css'
export default function MovieInfo({ movie }) {
    return (
      <div className="movie-info">
        <img src={movie.Poster} alt="movie" />
        <div className="movie-info-content">
          <h1>Title: {movie.Title}</h1>
          <h2>Year: {movie.Year}</h2>
          <h3>Genre: {movie.Genre}</h3>
          <h4>Plot: {movie.Plot}</h4>
        </div>
      </div>
    );
  }
  