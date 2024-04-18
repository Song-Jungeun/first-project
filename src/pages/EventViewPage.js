import "../css/eventviewpage.css";

import CviewHeader from "../components/CviewHeader";
import Ccontent from "../components/Ccontent";
import Creview from "../components/Creview";
import CreviewWrite from "../components/CreviewWrite";

export default function EventViewPage() {
  const children = "이벤트";
  const children1 = "이벤트";
  const children2 = "댓글 작성";
  const children3 = "등록";

  return (
    <div id="eventviewdiv">
      <main id="eventviewmain">
        <CviewHeader children={children} children1={children1} />
        <Ccontent />
        <Creview />
        <CreviewWrite children={children2} children1={children3} />
      </main>
    </div>
  );
}
