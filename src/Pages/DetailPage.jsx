import { useParams, useNavigate } from "react-router-dom";
import detailData from "../data/movieDetailData.json";

// useParams  : URL에서 id 값을 꺼내는 도구
// useNavigate: 코드로 페이지 이동하는 도구

function DetailPage() {
  const { id } = useParams(); // URL /movie/1011985 에서 "1011985" 꺼내기
  const navigate = useNavigate(); // 뒤로가기에 사용

  console.log("현재 영화 id:", id);
  // 지금은 데이터가 1개뿐이라 고정
  // 나중에 API 연동하면 id로 해당 영화 데이터를 가져올 수 있어요
  const movie = detailData;

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
