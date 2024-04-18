import "../css/header2.css";
import { Link } from "react-router-dom";

export default function Header2() {
  const logout = () => {
    const Token = localStorage.getItem("Token");

    localStorage.clear();
    window.location.replace("http://localhost:3000/");
  };

  return (
    <header id="header2">
      <div id="h2div">
        <ul>
          <li id="main-logo">
            <Link to="/">
              <img src="/images/logo.png" alt="logo img" />
            </Link>
          </li>
          <li>
            <Link to="/postlist">게시판</Link>
          </li>
          <li>
            <Link to="/informationlist">정보</Link>
          </li>
          <li>
            <Link to="/eventlist">이벤트</Link>
          </li>
          <li>
            <Link to="/inquirylist">문의사항</Link>
          </li>
          <li>
            <Link to="/noticelist">공지사항</Link>
          </li>
        </ul>
        <ul>
          <li>
            <p onClick={logout}>
              <Link to="/">로그아웃</Link>
            </p>
          </li>
          <li>
            <p>
              <Link to="/mypage">마이페이지</Link>
            </p>
          </li>
          <Link to="/search">
            <li id="h2search">
              <img id="h2search1" src="/images/search.png" alt="search img" />
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
