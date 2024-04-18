import "../css/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div id="hdiv">
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
            <p>
              <Link to="/login">로그인</Link>
            </p>
          </li>

          <li>
            <p>
              <Link to="/signup">회원가입</Link>
            </p>
          </li>

          <Link to="/search">
            <li id="hsearch">
              <img id="hsearch1" src="/images/search.png" alt="search img" />
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
