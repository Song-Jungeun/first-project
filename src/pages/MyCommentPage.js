import "../css/mycommentpage.css";
import Header3 from "../components/Header3";
import Cselect from "../components/Cselect";
import Cbutton from "../components/Cbutton";
import Cnumber from "../components/Cnumber";

export default function MyCommentPage() {
  const children = "수정";
  const children1 = "삭제";

  const backgroundColor = "#FFAC70";
  const backgroundColor1 = "#E59860";

  const border = "1px solid #FFAC70";
  const border1 = "1px solid #E59860";

  const fontsize = "14px";

  return (
    <div>
      <Header3 />
      <main id="mycommentmain">
        <div id="mycommentdiv">
          <h1 id="mycommenth1">작성 댓글</h1>
          <Cselect></Cselect>
          <div id="mycommentsection2">
            <ul id="mycommentsection2-1">
              <li>No.</li>
              <li>글제목</li>
              <li>댓글내용</li>
              <li>작성일</li>
            </ul>
          </div>
          <div className="mycommentsection3">
            <ul>
              <li>0</li>
              <li>게시글 제목입니다.</li>
              <li>댓글 내용입니다.</li>
              <li>0000.00.00</li>
              <li>
                <Cbutton
                  children={children}
                  backgroundColor={backgroundColor}
                  border={border}
                  fontsize={fontsize}
                ></Cbutton>
                <Cbutton
                  children={children1}
                  backgroundColor={backgroundColor1}
                  border={border1}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
            </ul>
          </div>
          <div className="mycommentsection3">
            <ul>
              <li>0</li>
              <li>게시글 제목입니다.</li>
              <li>댓글 내용입니다.</li>
              <li>0000.00.00</li>
              <li>
                <Cbutton
                  children={children}
                  backgroundColor={backgroundColor}
                  border={border}
                  fontsize={fontsize}
                ></Cbutton>
                <Cbutton
                  children={children1}
                  backgroundColor={backgroundColor1}
                  border={border1}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
            </ul>
          </div>
          <div className="mycommentsection3">
            <ul>
              <li>0</li>
              <li>게시글 제목입니다.</li>
              <li>댓글 내용입니다.</li>
              <li>0000.00.00</li>
              <li>
                <Cbutton
                  children={children}
                  backgroundColor={backgroundColor}
                  border={border}
                  fontsize={fontsize}
                ></Cbutton>
                <Cbutton
                  children={children1}
                  backgroundColor={backgroundColor1}
                  border={border1}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
            </ul>
          </div>
          <div className="mycommentsection3">
            <ul>
              <li>0</li>
              <li>게시글 제목입니다.</li>
              <li>댓글 내용입니다.</li>
              <li>0000.00.00</li>
              <li>
                <Cbutton
                  children={children}
                  backgroundColor={backgroundColor}
                  border={border}
                  fontsize={fontsize}
                ></Cbutton>
                <Cbutton
                  children={children1}
                  backgroundColor={backgroundColor1}
                  border={border1}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
            </ul>
          </div>
          <div className="mycommentsection3">
            <ul>
              <li>0</li>
              <li>게시글 제목입니다.</li>
              <li>댓글 내용입니다.</li>
              <li>0000.00.00</li>
              <li>
                <Cbutton
                  children={children}
                  backgroundColor={backgroundColor}
                  border={border}
                  fontsize={fontsize}
                ></Cbutton>
                <Cbutton
                  children={children1}
                  backgroundColor={backgroundColor1}
                  border={border1}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
            </ul>
          </div>
          <div className="mycommentsection3">
            <ul>
              <li>0</li>
              <li>게시글 제목입니다.</li>
              <li>댓글 내용입니다.</li>
              <li>0000.00.00</li>
              <li>
                <Cbutton
                  children={children}
                  backgroundColor={backgroundColor}
                  border={border}
                  fontsize={fontsize}
                ></Cbutton>
                <Cbutton
                  children={children1}
                  backgroundColor={backgroundColor1}
                  border={border1}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
            </ul>
          </div>
          <div className="mycommentsection3">
            <ul>
              <li>0</li>
              <li>게시글 제목입니다.</li>
              <li>댓글 내용입니다.</li>
              <li>0000.00.00</li>
              <li>
                <Cbutton
                  children={children}
                  backgroundColor={backgroundColor}
                  border={border}
                  fontsize={fontsize}
                ></Cbutton>
                <Cbutton
                  children={children1}
                  backgroundColor={backgroundColor1}
                  border={border1}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
            </ul>
          </div>
        </div>
        <Cnumber></Cnumber>
      </main>
    </div>
  );
}
