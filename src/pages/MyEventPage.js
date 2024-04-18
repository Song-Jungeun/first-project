import "../css/myeventpage.css";
import Header3 from "../components/Header3";
import Cselect from "../components/Cselect";
import Cevent from "../components/Cevent";
import Cnumber from "../components/Cnumber";

export default function MyEventPage() {
  const children = "댓글 이벤트";
  const children1 = "나의 어린시절 이야기";
  const children2 = "2024년 새해 다짐은?";
  const children3 = "진행 중";
  const children4 = "종료";
  const imagePath = "/images/Cevent1.png";
  const imagePath1 = "/images/Cevent2.png";
  const imagePath2 = "/images/Cevent3.png";
  const backgroundColor = "#FF6C00";
  const backgroundColor1 = "#000000";

  return (
    <div>
      <Header3 />
      <main id="myeventmain">
        <h1 id="myeventh1">참여한 이벤트</h1>
        <div id="myeventdiv">
          <div id="myeventsection1">
            <Cselect></Cselect>
          </div>
          <div id="myeventsection2">
            <div id="myeventsection2-1">
              <div className="myeventcevent">
                <div id="myeventcevent2">
                  <Cevent
                    id="myevent1"
                    imagePath={imagePath}
                    children={children}
                    backgroundColor={backgroundColor}
                    children1={children3}
                  />
                </div>
                <div id="myevent1-1">참여완료</div>
              </div>
              <div className="myeventcevent">
                <div id="myeventcevent2">
                  <Cevent
                    id="myevent1"
                    imagePath={imagePath1}
                    children={children1}
                    backgroundColor={backgroundColor1}
                    children1={children4}
                  />
                </div>
                <div id="myevent1-1">참여완료</div>
              </div>
              <div className="myeventcevent">
                <div id="myeventcevent2">
                  <Cevent
                    id="myevent1"
                    imagePath={imagePath2}
                    children={children2}
                    backgroundColor={backgroundColor1}
                    children1={children4}
                  />
                </div>
                <div id="myevent1-1">참여완료</div>
              </div>
            </div>
            <div id="myeventsection2-2">
              <div className="myeventcevent">
                <div id="myeventcevent2">
                  <Cevent
                    id="myevent1"
                    imagePath={imagePath}
                    children={children}
                    backgroundColor={backgroundColor}
                    children1={children3}
                  />
                </div>
                <div id="myevent1-1">참여완료</div>
              </div>
              <div className="myeventcevent">
                <div id="myeventcevent2">
                  <Cevent
                    id="myevent1"
                    imagePath={imagePath1}
                    children={children1}
                    backgroundColor={backgroundColor1}
                    children1={children4}
                  />
                </div>
                <div id="myevent1-1">참여완료</div>
              </div>
              <div className="myeventcevent">
                <div id="myeventcevent2">
                  <Cevent
                    id="myevent1"
                    imagePath={imagePath2}
                    children={children2}
                    backgroundColor={backgroundColor1}
                    children1={children4}
                  />
                </div>
                <div id="myevent1-1">참여완료</div>
              </div>
            </div>
          </div>
        </div>
        <Cnumber></Cnumber>
      </main>
    </div>
  );
}
