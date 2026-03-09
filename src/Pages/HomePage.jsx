import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../App.css";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
console.log("토큰 확인:", TOKEN);

function HomePage() {
  const [movies, setMovies] = useState([]); // 영화 목록 상태
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 컴포넌트가 처음 화면에 뜰 때 API 호출
    fetch("https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1", {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const filteredMovies = data.results.filter(
          (movie) => movie.adult === false,
        );
        setMovies(filteredMovies);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ color: "#fff", textAlign: "center", padding: "60px" }}>
        불러오는 중...
      </div>
    );
  }

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
