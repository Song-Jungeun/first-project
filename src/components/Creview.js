import "../css/creview.css";
import Creport from "./Creport";
import CreviseButton from "./CreviseButton";
import CdeleteButton from "./CdeleteButton";
import Cnumber from "./Cnumber";

export default function Creview() {
  return (
    <div id="creviewdiv">
      <h1 id="creviewh1">댓글</h1>
      <div id="creviewdiv1">
        <div className="creviewdiv2">
          <ul id="creviewul1">
            <li>작성자</li>
            <li>작성일 0000.00.00</li>
          </ul>
          <ul id="creviewul2">
            <li>댓글 내용입니다.</li>
            <li>
              <Creport></Creport>
            </li>
          </ul>
        </div>
        <div className="creviewdiv2">
          <ul id="creviewul1">
            <li>작성자</li>
            <li>작성일 0000.00.00</li>
          </ul>
          <ul id="creviewul2">
            <li>댓글 내용입니다.</li>
            <li>
              <CreviseButton></CreviseButton>
              <CdeleteButton></CdeleteButton>
            </li>
          </ul>
        </div>
        <div className="creviewdiv2">
          <ul id="creviewul1">
            <li>작성자</li>
            <li>작성일 0000.00.00</li>
          </ul>
          <ul id="creviewul2">
            <li>댓글 내용입니다.</li>
            <li>
              <Creport></Creport>
            </li>
          </ul>
        </div>
        <div className="creviewdiv2">
          <ul id="creviewul1">
            <li>작성자</li>
            <li>작성일 0000.00.00</li>
          </ul>
          <ul id="creviewul2">
            <li>댓글 내용입니다.</li>
            <li>
              <Creport></Creport>
            </li>
          </ul>
        </div>
        <div id="creview-cnumber">
          <Cnumber></Cnumber>
        </div>
      </div>
    </div>
  );
}
