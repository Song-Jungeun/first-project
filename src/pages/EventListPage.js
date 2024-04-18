import "../css/eventlistpage.css";
import Cselect from "../components/Cselect";
import Ccondition from "../components/Ccondition";
import Cevent from "../components/Cevent";
import Cnumber from "../components/Cnumber";
import Header3 from "../components/Header3";
import CpostButton from "../components/CpostButton";

export default function EventListPage() {
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
    <div id="eventlistdiv">
      <Header3 />
      <main id="eventlistmain">
        <h1 id="eventlisth1">이벤트</h1>
        <div id="eventlistdiv0">
          <div id="eventlistdiv1">
            <Cselect></Cselect>
          </div>
          <div id="eventlistdiv1-1">
            <Ccondition />
          </div>
          <div id="eventlistdiv2">
            <div id="eventlistdiv2-1">
              <div className="eventlistclass">
                <div id="eventlistdiv2-1-1">
                  <Cevent
                    id="eventlistcevent"
                    imagePath={imagePath}
                    children={children}
                    backgroundColor={backgroundColor}
                    children1={children3}
                  />
                </div>
              </div>
              <div className="eventlistclass">
                <div id="eventlistdiv2-1-1">
                  <Cevent
                    id="eventlistcevent"
                    imagePath={imagePath1}
                    children={children1}
                    backgroundColor={backgroundColor1}
                    children1={children4}
                  />
                </div>
              </div>
              <div className="eventlistclass">
                <div id="eventlistdiv2-1-1">
                  <Cevent
                    id="eventlistcevent"
                    imagePath={imagePath2}
                    children={children2}
                    backgroundColor={backgroundColor1}
                    children1={children4}
                  />
                </div>
              </div>
            </div>
            <div id="eventlistdiv2-2">
              <div className="eventlistclass">
                <div id="eventlistdiv2-1-1">
                  <Cevent
                    id="eventlistcevent"
                    imagePath={imagePath2}
                    children={children}
                    backgroundColor={backgroundColor1}
                    children1={children4}
                  />
                </div>
              </div>
              <div className="eventlistclass">
                <div id="eventlistdiv2-1-1">
                  <Cevent
                    id="eventlistcevent"
                    imagePath={imagePath1}
                    children={children1}
                    backgroundColor={backgroundColor1}
                    children1={children4}
                  />
                </div>
              </div>
              <div className="eventlistclass">
                <div id="eventlistdiv2-1-1">
                  <Cevent
                    id="eventlistcevent"
                    imagePath={imagePath}
                    children={children2}
                    backgroundColor={backgroundColor1}
                    children1={children4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="eventlistdiv3">
          <CpostButton />
        </div>
        <Cnumber></Cnumber>
      </main>
    </div>
  );
}
