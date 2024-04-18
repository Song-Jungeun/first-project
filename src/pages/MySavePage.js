import "../css/mysavepage.css";
import Header3 from "../components/Header3";
import Cbutton2 from "../components/Cbutton2";
import Cselect from "../components/Cselect";
import Cnumber from "../components/Cnumber";

export default function MySavePage() {
  const children = "게시글";
  const children1 = "정보";

  const fontsize = "16px";
  return (
    <div>
      <Header3 />
      <main id="mysavemain">
        <h1 id="mysaveh1">스크랩</h1>
        <div id="mysavediv">
          <ul>
            <li>
              <Cbutton2 children={children} fontsize={fontsize}></Cbutton2>
              <Cbutton2 children={children1} fontsize={fontsize}></Cbutton2>
            </li>
            <li>
              <Cselect></Cselect>
            </li>
          </ul>
          <div id="mysavesection2">
            <div className="mysavesection2-1">
              <ul id="mysavesection2-ul">
                <li>No.</li>
                <li>글제목</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
                <li>작성자</li>
              </ul>
            </div>
            <div className="mysavesection2-1">
              <ul id="mysavesection2-ul">
                <li>No.</li>
                <li>글제목</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
                <li>작성자</li>
              </ul>
              <ul className="mysavesection2-ul2">
                <li>0</li>
                <li>스크랩 제목입니다.</li>
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
