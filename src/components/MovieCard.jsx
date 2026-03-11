import { Link } from "react-router-dom";

const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w300";

function MovieCard({ movie }) {
  return (
    // Link : <a> 태그 대신 사용, 페이지 새로고침 없이 이동
    // movie.id 가 1011985 면 → /movie/1011985 로 이동
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
      <div className="bg-gray-900 rounded-xl overflow-hidden cursor-pointer border border-gray-800 transition-transform duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl">
        <img
          src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
          alt={movie.title}
          className="w-full object-cover block"
          style={{ aspectRatio: "2/3" }}
        />
        <div className="p-3">
          <h3 className="text-white text-sm font-bold mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
            {movie.title}
          </h3>
          <p className="text-yellow-400 text-sm m-0">
            ⭐ {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
