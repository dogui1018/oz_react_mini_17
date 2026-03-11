import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout이 부모 → NavBar가 모든 페이지에 공통으로 표시 */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<DetailPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
