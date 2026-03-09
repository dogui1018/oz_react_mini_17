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
      <div style={{ color: "#fff", textAlign: "center", padding: "60px" }}>
        불러오는 중...
      </div>
    );
  }

  return (
    <div className="app">
      {/* 뒤로가기 버튼 */}
      <button onClick={() => navigate(-1)}>← 목록으로</button>

      {/* 포스터 + 정보 */}
      <div className="detail-content">
        <img
          src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
          alt={movie.title}
        />

        <div className="detail-info">
          <h2>{movie.title}</h2>
          <p>⭐ {movie.vote_average.toFixed(1)}</p>
          <p>📅 {movie.release_date}</p>
          <p>⏱ {movie.runtime}분</p>

          {/* 장르 태그 */}
          <div className="detail-genres">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            ))}
          </div>

          {/* 줄거리 */}
          <p className="detail-overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
