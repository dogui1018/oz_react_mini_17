import { Link } from "react-router-dom";
import "./MovieCard.css";

const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w300";

function MovieCard({ movie }) {
  return (
    // Link : <a> 태그 대신 사용, 페이지 새로고침 없이 이동
    // movie.id 가 1011985 면 → /movie/1011985 로 이동
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
      <div className="movie-card">
        <img
          className="movie-card__poster"
          src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
          alt={movie.title}
        />
        <div className="movie-card__info">
          <h3 className="movie-card__title">{movie.title}</h3>
          <p className="movie-card__rating">
            ⭐ {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
