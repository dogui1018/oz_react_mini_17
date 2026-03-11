import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const debouncedQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedQuery.trim() !== "") {
      navigate(`/search?q=${debouncedQuery}`);
    }
  }, [debouncedQuery, navigate]);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0e1a] border-b border-white/10">
      <div className="flex items-center justify-between px-5 md:px-10 h-16">
        <Link
          to="/"
          className="text-red-400 text-xl font-extrabold tracking-tight no-underline flex-shrink-0"
        >
          🎬 OZMOVIE
        </Link>

        <input
          type="text"
          placeholder="🔍 영화 검색..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="
            hidden md:block         
            flex-1 mx-8
            px-5 py-2
            rounded-full
            bg-white/10
            border border-white/20
            text-white text-sm
            outline-none
            placeholder-gray-400
            focus:border-red-400
            transition-all
          "
        />

        <div className="flex items-center gap-2 md:gap-3">
          <button
            className="md:hidden text-white text-xl p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            🔍
          </button>

          <button
            className="
            px-3 py-1.5 md:px-4 md:py-2
            rounded-full text-xs md:text-sm
            font-semibold text-white
            border border-white/30
            hover:bg-white/10
            transition-all
          "
          >
            로그인
          </button>

          <button
            className="
            px-3 py-1.5 md:px-4 md:py-2
            rounded-full text-xs md:text-sm
            font-semibold
            bg-red-500 text-white
            hover:bg-red-600
            transition-all
          "
          >
            회원가입
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-5 pb-4">
          <input
            type="text"
            placeholder="🔍 영화 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="
              w-full px-5 py-2
              rounded-full
              bg-white/10
              border border-white/20
              text-white text-sm
              outline-none
              placeholder-gray-400
              focus:border-red-400
              transition-all
            "
          />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
