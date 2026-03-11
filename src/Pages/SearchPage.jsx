import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const fetchSearchMovies = (query) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&language=ko-KR&page=1`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  ).then((response) => response.json());
};

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    // API 호출 함수 사용
    const searchMovies = async () => {
      setMovies([]);
      setLoading(true);

      const data = await fetchSearchMovies(query);
      const filtered = data.results.filter((movie) => movie.adult === false);

      setMovies(filtered);
      setLoading(false);
    };

    searchMovies(); // 함수 호출
  }, [query]);

  return (
    <div className="bg-gray-950 min-h-screen py-10 px-5">
      <h2 className="text-white text-center text-3xl font-bold mb-10">
        🔍 "{query}" 검색 결과
      </h2>

      {/* 로딩 중 */}
      {loading && <p className="text-gray-400 text-center">검색 중...</p>}

      {/* 검색 결과 없을 때 */}
      {!loading && movies.length === 0 && (
        <p className="text-gray-400 text-center">검색 결과가 없어요 😢</p>
      )}

      {/* 검색 결과 */}
      <div
        className="grid gap-6 max-w-6xl mx-auto px-5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
      >
        {" "}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
