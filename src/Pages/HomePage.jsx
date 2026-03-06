import MovieCard from "../components/MovieCard";
import data from "../data/movieListData.json";
import "../App.css";

const movies = data.results;

function HomePage() {
  return (
    <div className="app">
      <h1 className="app-title">🎬 OZ movie</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
