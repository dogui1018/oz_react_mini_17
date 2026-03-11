import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

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
      <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center">
        <div className="text-center">
          {/* 로딩 스피너 */}
          <div className="w-12 h-12 border-4 border-red-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm">불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] px-4 md:px-8 lg:px-12 py-8 md:py-12">
      {/* 타이틀 영역 */}
      <div className="text-center mb-8 md:mb-12">
        <h1
          className="
          text-2xl md:text-4xl lg:text-5xl
          font-extrabold text-white mb-2 md:mb-3
        "
        >
          🎬 인기 영화
        </h1>
        <p className="text-gray-400 text-xs md:text-base">
          지금 가장 인기있는 영화들을 만나보세요
        </p>
      </div>

      {/* 영화 그리드
          모바일  : 2열
          태블릿  : 3열
          데스크탑: 5열
          큰화면  : 6열
      */}
      <div
        className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        gap-3 md:gap-5
        max-w-7xl mx-auto
      "
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
