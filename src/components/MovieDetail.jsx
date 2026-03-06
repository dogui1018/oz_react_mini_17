function MovieDetail({ movie, onClose }) {
  // 장르는 배열이라서 map으로 뿌려줘요
  // genres: [{ id: 16, name: "애니메이션" }, { id: 28, name: "액션" }, ...]

  return (
    <div className="detail-backdrop">
      {" "}
      {/* 어두운 배경 */}
      <div className="detail-card">
        {" "}
        {/* 흰 카드 박스 */}
        {/* 닫기 버튼 */}
        <button onClick={onClose}>✕ 닫기</button>
        {/* 포스터 + 정보 나란히 */}
        <div className="detail-content">
          {/* 포스터 */}
          <img
            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            alt={movie.title}
          />

          {/* 텍스트 정보 */}
          <div className="detail-info">
            <h2>{movie.title}</h2>
            <p>⭐ {movie.vote_average.toFixed(1)}</p>
            <p>📅 {movie.release_date}</p>
            <p>⏱ {movie.runtime}분</p>

            {/* 장르 태그 - genres 배열을 map으로 순회 */}
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
    </div>
  );
}

export default MovieDetail;
