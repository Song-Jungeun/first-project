import "../css/homepage.css";
import Cevent from "../components/Cevent";
import Cinfoemation from "../components/Cinformation";
import Header3 from "../components/Header3";

import { Link } from "react-router-dom";

export default function HomePage() {
  const imagePath = "/images/Cevent1.png";
  const imagePath1 = "/images/Cevent2.png";
  const imagePath2 = "/images/Cevent3.png";

  const children = "댓글 이벤트";
  const children1 = "진행 중";
  const children2 = "종료";
  const backgroundColor = "#FF6C00";
  const backgroundColor1 = "#000000";

  const imagePath3 = "/images/Cinfofrmation2.png";
  const imagePath4 = "/images/Cinfofrmation1.png";
  const children3 = "그 시절의 겨울은";
  const children4 = "인절미의 유래";

  return (
    <div>
      <Header3 />
      <main id="HomePage_main">
        <img id="h-mainimg" src="/images/main-img.png" alt="main img" />
        <div id="hmain-section1">
          <div id="hsection1-1">
            <ul id="hboard1">
              <li>게시판</li>
              <Link to="/postlist">
                <li id="hboard1-1">
                  <p>더보기</p>
                  <img src="/images/plus.png" alt="plus" />
                </li>
              </Link>
            </ul>
            <ul class="hboard2">
              <li>
                <p>카테고리</p>
                <p>20대</p>
              </li>
              <li>게시글 제목입니다.</li>
              <li>작성자</li>
              <li>
                <p>작성일</p>0000.00.00
              </li>
            </ul>
            <ul class="hboard2">
              <li>
                <p>카테고리</p>
                <p>20대</p>
              </li>
              <li>게시글 제목입니다.</li>
              <li>작성자</li>
              <li>
                <p>작성일</p>0000.00.00
              </li>
            </ul>
            <ul class="hboard2">
              <li>
                <p>카테고리</p>
                <p>20대</p>
              </li>
              <li>게시글 제목입니다.</li>
              <li>작성자</li>
              <li>
                <p>작성일</p>0000.00.00
              </li>
            </ul>
            <ul class="hboard2">
              <li>
                <p>카테고리</p>
                <p>20대</p>
              </li>
              <li>게시글 제목입니다.</li>
              <li>작성자</li>
              <li>
                <p>작성일</p>0000.00.00
              </li>
            </ul>
          </div>
          <div id="hsection1-2">
            <ul id="hnotice1">
              <li>공지사항</li>
              <Link to="/noticelist">
                <li id="hnotice1-1">
                  <p>더보기</p>
                  <img src="/images/plus.png" alt="plus" />
                </li>
              </Link>
            </ul>
            <ul class="hnotice2">
              <li>공지사항 제목입니다.</li>
              <li>
                <p>작성일</p>0000.00.00
              </li>
            </ul>
            <ul class="hnotice2">
              <li>공지사항 제목입니다.</li>
              <li>
                <p>작성일</p>0000.00.00
              </li>
            </ul>
            <ul class="hnotice2">
              <li>공지사항 제목입니다.</li>
              <li>
                <p>작성일</p>0000.00.00
              </li>
            </ul>
            <ul class="hnotice2">
              <li>공지사항 제목입니다.</li>
              <li>
                <p>작성일</p>0000.00.00
              </li>
            </ul>
          </div>
        </div>
        <div id="hmain-section2">
          <ul>
            <li>이벤트</li>
            <Link to="/eventlist">
              <li id="hmain-section2-1">
                <p>더보기</p>
                <img src="/images/plus.png" alt="plus" />
              </li>
            </Link>
          </ul>
          <div id="hevent">
            <Cevent
              id="hevent1"
              imagePath={imagePath}
              children={children}
              backgroundColor={backgroundColor}
              children1={children1}
            />
            <Cevent
              imagePath={imagePath1}
              children={children}
              backgroundColor={backgroundColor1}
              children1={children2}
            />
            <Cevent
              imagePath={imagePath2}
              children={children}
              backgroundColor={backgroundColor1}
              children1={children2}
            />
          </div>
        </div>

        <div id="hmain-section3">
          <ul>
            <li>정보</li>
            <Link to="/informationlist">
              <li id="hmain-section3-1">
                <p>더보기</p>
                <img src="/images/plus.png" alt="plus" />
              </li>
            </Link>
          </ul>
          <div id="hinformation">
            <Cinfoemation
              imagePath={imagePath3}
              children={children3}
            ></Cinfoemation>
            <Cinfoemation
              imagePath={imagePath4}
              children={children4}
            ></Cinfoemation>
            <Cinfoemation
              imagePath={imagePath3}
              children={children3}
            ></Cinfoemation>
            <Cinfoemation
              imagePath={imagePath4}
              children={children4}
            ></Cinfoemation>
          </div>
        </div>
      </main>
    </div>
  );
}
