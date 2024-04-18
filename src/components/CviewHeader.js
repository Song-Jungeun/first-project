import "../css/cviewheader.css";
import Creport from "../components/Creport";

export default function CviewHeader({ children, children1 }) {
  return (
    <div id="cviewheaderdiv">
      <div id="cviewheaderdiv1">
        <ul id="cviewheaderul1">
          <li>{children}</li>
          <li>
            <Creport></Creport>
          </li>
        </ul>
        <ul id="cviewheaderul2">
          <li>{children1}</li>
        </ul>
        <ul id="cviewheaderul3">
          <li>작성자</li>
          <li>작성일 0000.00.00</li>
        </ul>
      </div>
    </div>
  );
}
