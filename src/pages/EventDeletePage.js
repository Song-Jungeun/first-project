import "../css/eventdeletepage.css";
import Cdelete from "../components/Cdelete";

export default function EventDeletePage() {
  const children = "이벤트";
  const children1 = "이벤트";

  return (
    <div id="eventdeletediv">
      <Cdelete children={children} children1={children1}></Cdelete>
    </div>
  );
}
