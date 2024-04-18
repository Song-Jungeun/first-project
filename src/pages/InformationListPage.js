import "../css/Informationlistpage.css";
import Header3 from "../components/Header3";
import Cselect from "../components/Cselect";
import Cinformation from "../components/Cinformation";
import Cnumber from "../components/Cnumber";
import CpostButton from "../components/CpostButton";
import Ccondition from "../components/Ccondition";

export default function InformationListPage() {
  const children = "그 시절의 겨울은";
  const children1 = "인절미의 유래";

  const imagePath = "/images/Cinfofrmation2.png";
  const imagePath1 = "/images/Cinfofrmation1.png";

  return (
    <div id="informationlistdiv">
      <Header3 />
      <main id="informationlistmain">
        <h1 id="informationlisth1">정보</h1>
        <div id="informationlistdiv0">
          <div id="informationlistdiv1">
            <Cselect></Cselect>
          </div>
          <div id="informationlistdiv1-1">
            <Ccondition />
          </div>

          <div id="informationlistdiv2">
            <div id="informationlistdiv2-1">
              <div className="informationlistclass">
                <div id="informationlistdiv2-1-1">
                  <Cinformation
                    id="informationlistcinformation"
                    imagePath={imagePath}
                    children={children}
                  />
                </div>
              </div>
              <div className="informationlistclass">
                <div id="informationlistdiv2-1-1">
                  <Cinformation
                    id="informationlistcinformation"
                    imagePath={imagePath1}
                    children={children1}
                  />
                </div>
              </div>
              <div className="informationlistclass">
                <div id="informationlistdiv2-1-1">
                  <Cinformation
                    id="informationlistcinformation"
                    imagePath={imagePath}
                    children={children}
                  />
                </div>
              </div>
            </div>
            <div id="informationlistdiv2-2">
              <div className="informationlistclass">
                <div id="informationlistdiv2-1-1">
                  <Cinformation
                    id="informationlistcinformation"
                    imagePath={imagePath1}
                    children={children1}
                  />
                </div>
              </div>
              <div className="informationlistclass">
                <div id="informationlistdiv2-1-1">
                  <Cinformation
                    id="informationlistcinformation"
                    imagePath={imagePath}
                    children={children}
                  />
                </div>
              </div>
              <div className="informationlistclass">
                <div id="informationlistdiv2-1-1">
                  <Cinformation
                    id="informationlistcinformation"
                    imagePath={imagePath1}
                    children={children1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="informationlistdiv3">
          <CpostButton />
        </div>
        <Cnumber></Cnumber>
      </main>
    </div>
  );
}
