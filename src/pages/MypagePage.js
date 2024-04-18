import "../css/mypagepage.css";
import Header3 from "../components/Header3";

export default function MypagePage() {
  return (
    <div>
      <Header3 />
      <main id="mypagemain">
        <h1 id="mypageh1">마이페이지</h1>
        <ul id="myform">
          <li id="myform-1">
            <p>닉네임</p>
            <div className="form-my"></div>
          </li>
          <li id="myform-2">
            <p>아이디</p>
            <div className="form-my"></div>
          </li>
          <li id="myform-3">
            <p>비밀번호</p>
            <div className="form-my"></div>
            <button id="form-mypwpw">비밀번호 변경하기</button>
          </li>
          <li id="myform-4">
            <p>전화번호</p>
            <div className="form-my"></div>
          </li>
          <li id="myform-5">
            <p>생년월일</p>
            <div className="form-my"></div>
          </li>
          <li id="myform-6">
            <button id="my-button" type="submit">
              정보 수정
            </button>
          </li>
        </ul>

        <div id="mysection1">
          <div id="mysection1-1">
            <div id="mysection1-2">
              <ul>
                <li>좋아요</li>
                <li>
                  <p>더보기</p>
                  <img src="/images/plus.png" alt="plus" />
                </li>
              </ul>
              <div>
                <ul>
                  <li>글제목</li>
                  <li>작성일</li>
                </ul>
                <ul className="mys1-2">
                  <li>게시글 제목입니다.</li>
                  <li>0000.00.00</li>
                </ul>
                <ul className="mys1-2">
                  <li>게시글 제목입니다.</li>
                  <li>0000.00.00</li>
                </ul>
                <ul className="mys1-2">
                  <li>게시글 제목입니다.</li>
                  <li>0000.00.00</li>
                </ul>
              </div>
            </div>
            <div id="mysection1-3">
              <ul>
                <li>스크랩</li>
                <li>
                  <p>더보기</p>
                  <img src="/images/plus.png" alt="plus" />
                </li>
              </ul>
              <div>
                <ul>
                  <li>글제목</li>
                  <li>작성일</li>
                </ul>
                <ul className="mys1-2">
                  <li>게시글 제목입니다.</li>
                  <li>0000.00.00</li>
                </ul>
                <ul className="mys1-2">
                  <li>게시글 제목입니다.</li>
                  <li>0000.00.00</li>
                </ul>
                <ul className="mys1-2">
                  <li>게시글 제목입니다.</li>
                  <li>0000.00.00</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="mysection1-4">
            <ul>
              <li>참여한 이벤트</li>
              <li>
                <p>더보기</p>
                <img src="/images/plus.png" alt="plus" />
              </li>
            </ul>
            <div>
              <ul>
                <li>이벤트 제목</li>
                <li>참여일</li>
                <li>제목</li>
              </ul>
              <ul className="mys1-4">
                <li>이벤트 제목입니다.</li>
                <li>0000.00.00</li>
                <li>진행 중</li>
              </ul>
              <ul className="mys1-4">
                <li>이벤트 제목입니다.</li>
                <li>0000.00.00</li>
                <li>진행 중</li>
              </ul>
              <ul className="mys1-4">
                <li>이벤트 제목입니다.</li>
                <li>0000.00.00</li>
                <li>진행 중</li>
              </ul>
              <ul className="mys1-4">
                <li>이벤트 제목입니다.</li>
                <li>0000.00.00</li>
                <li>진행 중</li>
              </ul>
              <ul className="mys1-4">
                <li>이벤트 제목입니다.</li>
                <li>0000.00.00</li>
                <li>진행 중</li>
              </ul>
              <ul className="mys1-4">
                <li>이벤트 제목입니다.</li>
                <li>0000.00.00</li>
                <li>진행 중</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="mysection2">
          <div id="mysection2-1">
            <ul>
              <li>작성글</li>
              <li>
                <p>더보기</p>
                <img src="/images/plus.png" alt="plus" />
              </li>
            </ul>
            <div>
              <ul>
                <li>글제목</li>
                <li>좋아요수</li>
                <li>댓글수</li>
                <li>조회수</li>
                <li>작성일</li>
              </ul>
              <ul className="mys2-1">
                <li>게시글 제목입니다.</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0000.00.00</li>
              </ul>
              <ul className="mys2-1">
                <li>게시글 제목입니다.</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0000.00.00</li>
              </ul>
              <ul className="mys2-1">
                <li>게시글 제목입니다.</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0000.00.00</li>
              </ul>
              <ul className="mys2-1">
                <li>게시글 제목입니다.</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0000.00.00</li>
              </ul>
              <ul className="mys2-1">
                <li>게시글 제목입니다.</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0000.00.00</li>
              </ul>
              <ul className="mys2-1">
                <li>게시글 제목입니다.</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0000.00.00</li>
              </ul>
            </div>
          </div>
          <div id="mysection2-2">
            <ul>
              <li>작성댓글</li>
              <li>
                <p>더보기</p>
                <img src="/images/plus.png" alt="plus" />
              </li>
            </ul>
            <div>
              <ul>
                <li>글제목</li>
                <li>댓글내용</li>
                <li>작성일</li>
              </ul>
              <ul className="mys2-2">
                <li>게시글 제목입니다.</li>
                <li>댓글 내용입니다.</li>
                <li>0000.00.00</li>
              </ul>
              <ul className="mys2-2">
                <li>게시글 제목입니다.</li>
                <li>댓글 내용입니다.</li>
                <li>0000.00.00</li>
              </ul>
              <ul className="mys2-2">
                <li>게시글 제목입니다.</li>
                <li>댓글 내용입니다.</li>
                <li>0000.00.00</li>
              </ul>
              <ul className="mys2-2">
                <li>게시글 제목입니다.</li>
                <li>댓글 내용입니다.</li>
                <li>0000.00.00</li>
              </ul>
              <ul className="mys2-2">
                <li>게시글 제목입니다.</li>
                <li>댓글 내용입니다.</li>
                <li>0000.00.00</li>
              </ul>
              <ul className="mys2-2">
                <li>게시글 제목입니다.</li>
                <li>댓글 내용입니다.</li>
                <li>0000.00.00</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
