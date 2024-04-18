import "../css/mypostpage.css";
import Header3 from "../components/Header3";
import Cnumber from "../components/Cnumber";
import Cselect from "../components/Cselect";
import Cbutton from "../components/Cbutton";
import Cburron2 from "../components/Cbutton2";

export default function MyPostPage() {
  const children = "수정";
  const children1 = "삭제";

  const children2 = "좋아요 순";
  const children3 = "조회 순";
  const children4 = "최신순";

  const backgroundColor = "#FFAC70";
  const backgroundColor1 = "#E59860";

  const border = "1px solid #FFAC70";
  const border1 = "1px solid #E59860";

  const fontsize = "14px";
  const fontsize2 = "16px";

  const fontweight = "bold";

  return (
    <div>
      <Header3 />
      <main id="mypostpagemain">
        <div id="mypost">
          <hl id="myposth1">작성글</hl>
          <Cselect></Cselect>
          <ul id="mypostsection2">
            <li>
              <Cburron2
                children={children2}
                fontsize={fontsize2}
                fontweight={fontweight}
              ></Cburron2>
            </li>
            <li>
              <Cburron2
                children={children3}
                fontsize={fontsize2}
                fontweight={fontweight}
              ></Cburron2>
            </li>
            <li>
              <Cburron2
                children={children4}
                fontsize={fontsize2}
                fontweight={fontweight}
              ></Cburron2>
            </li>
          </ul>
          <div id="mypostsection3">
            <ul>
              <li>No.</li>
              <li>글제목</li>
              <li>좋아요 수</li>
              <li>댓글수</li>
              <li>조회수</li>
              <li>작성일</li>
            </ul>
          </div>
          <div className="mypostsection4">
            <ul>
              <li>0</li>
              <li>게시글 제목입니다.</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0000.00.00</li>
              <li>
                <Cbutton
                  children={children}
                  backgroundColor={backgroundColor}
                  border={border}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
              <li>
                <Cbutton
                  children={children1}
                  backgroundColor={backgroundColor1}
                  border={border1}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
            </ul>
          </div>
          <div className="mypostsection4">
            <ul>
              <li>0</li>
              <li>게시글 제목입니다.</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0000.00.00</li>
              <li>
                <Cbutton
                  children={children}
                  backgroundColor={backgroundColor}
                  border={border}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
              <li>
                <Cbutton
                  children={children1}
                  backgroundColor={backgroundColor1}
                  border={border1}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
            </ul>
          </div>
          <div className="mypostsection4">
            <ul>
              <li>0</li>
              <li>게시글 제목입니다.</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0000.00.00</li>
              <li>
                <Cbutton
                  children={children}
                  backgroundColor={backgroundColor}
                  border={border}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
              <li>
                <Cbutton
                  children={children1}
                  backgroundColor={backgroundColor1}
                  border={border1}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
            </ul>
          </div>
          <div className="mypostsection4">
            <ul>
              <li>0</li>
              <li>게시글 제목입니다.</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0000.00.00</li>
              <li>
                <Cbutton
                  children={children}
                  backgroundColor={backgroundColor}
                  border={border}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
              <li>
                <Cbutton
                  children={children1}
                  backgroundColor={backgroundColor1}
                  border={border1}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
            </ul>
          </div>
          <div className="mypostsection4">
            <ul>
              <li>0</li>
              <li>게시글 제목입니다.</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0000.00.00</li>
              <li>
                <Cbutton
                  children={children}
                  backgroundColor={backgroundColor}
                  border={border}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
              <li>
                <Cbutton
                  children={children1}
                  backgroundColor={backgroundColor1}
                  border={border1}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
            </ul>
          </div>
          <div className="mypostsection4">
            <ul>
              <li>0</li>
              <li>게시글 제목입니다.</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
              <li>0000.00.00</li>
              <li>
                <Cbutton
                  children={children}
                  backgroundColor={backgroundColor}
                  border={border}
                  fontsize={fontsize}
                ></Cbutton>
              </li>
              <li>
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
