import "../css/mylikepage.css";
import Header3 from "../components/Header3";
import Cbutton2 from "../components/Cbutton2";
import Cselect from "../components/Cselect";
import Cnumber from "../components/Cnumber";

export default function MyLikePage() {
  const children = "게시글";
  const children1 = "정보";

  const fontsize = "16px";

  return (
    <div>
      <Header3 />
      <main id="mylikemain">
        <h1 id="mylikeh1">좋아요</h1>
        <div id="mylikediv">
          <ul>
            <li>
              <Cbutton2 children={children} fontsize={fontsize}></Cbutton2>
              <Cbutton2 children={children1} fontsize={fontsize}></Cbutton2>
            </li>
            <li>
              <Cselect></Cselect>
            </li>
          </ul>
          <div id="mylikesection2">
            <div className="mylikesection2-1">
              <ul id="mylikesection2-ul">
                <li>No.</li>
                <li>글제목</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
            </div>
            <div className="mylikesection2-1">
              <ul id="mylikesection2-ul">
                <li>No.</li>
                <li>글제목</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mylikesection2-ul2">
                <li>0</li>
                <li>좋아요 제목입니다.</li>
                <li>작성자</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="mylikenumber">
          <Cnumber></Cnumber>
        </div>
      </main>
    </div>
  );
}
