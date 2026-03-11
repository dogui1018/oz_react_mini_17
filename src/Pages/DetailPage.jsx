import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
// useParams  : URL에서 id 값을 꺼내는 도구
// useNavigate: 코드로 페이지 이동하는 도구

function DetailPage() {
  const { id } = useParams(); // URL /movie/1011985 에서 "1011985" 꺼내기
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null); // 영화 상세 데이터 상태
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // id를 이용해서 해당 영화 상세 API 호출
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovie(data); // 받아온 데이터 상태에 저장
        setLoading(false);
      });
  }, [id]); // id가 바뀔 때마다 API 다시 호출

  if (loading) {
    return (
      <div className="bg-gray-950 min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-lg">불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen py-10 px-5">
      {/* 뒤로가기 버튼 */}
      <button
        onClick={() => navigate(-1)}
        className="ml-5 px-5 py-2 rounded-md text-sm text-gray-400 border border-gray-700 bg-transparent cursor-pointer hover:border-red-500 hover:text-white transition-all"
      >
        ← 목록으로
      </button>

      {/* 포스터 + 정보 */}
      <div className="flex gap-10 flex-wrap max-w-5xl mx-auto mt-10 px-5">
        <img
          src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
          alt={movie.title}
          className="rounded-xl w-64 flex-shrink-0 shadow-2xl"
        />

        <div className="flex-1 min-w-52">
          <h2 className="text-white text-3xl font-bold mb-4">{movie.title}</h2>
          <p className="text-gray-300 my-2 text-sm">
            ⭐ {movie.vote_average.toFixed(1)}
          </p>
          <p className="text-gray-300 my-2 text-sm">📅 {movie.release_date}</p>
          <p className="text-gray-300 my-2 text-sm">⏱ {movie.runtime}분</p>

          {/* 장르 태그 */}
          <div className="flex flex-wrap gap-2 my-4">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* 줄거리 */}
          <p className="text-gray-300 text-sm leading-7 mt-4">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
