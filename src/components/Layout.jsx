import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

// Layout : 모든 페이지에 공통으로 NavBar를 보여주고
//          Outlet 자리에 각 페이지 내용을 보여줘요
//
// /          → NavBar + HomePage
// /movie/:id → NavBar + DetailPage

function Layout() {
  return (
    <div>
      {/* 모든 페이지에 공통으로 표시 */}
      <NavBar />

      {/* 현재 URL에 맞는 페이지가 여기에 들어옴 */}
      <Outlet />
    </div>
  );
}

export default Layout;
