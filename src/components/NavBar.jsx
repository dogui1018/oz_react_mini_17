import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태
  const navigate = useNavigate();

  // 검색창에서 Enter 누르면 검색 결과 페이지로 이동
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar">
      {/* 로고 - 클릭하면 홈으로 */}
      <Link to="/" className="navbar__logo">
        🎬 OZ movie
      </Link>

      {/* 검색창 */}
      <input
        className="navbar__search"
        type="text"
        placeholder="🔍 영화 검색..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleSearch}
      />

      {/* 로그인 / 회원가입 버튼 */}
      <div className="navbar__auth">
        <button className="navbar__btn navbar__btn--login">로그인</button>
        <button className="navbar__btn navbar__btn--signup">회원가입</button>
      </div>
    </nav>
  );
}

export default NavBar;
