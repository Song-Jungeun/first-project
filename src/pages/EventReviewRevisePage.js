import "../css/eventreviewrevisepage.css";

import CviewHeader from "../components/CviewHeader";
import Ccontent from "../components/Ccontent";
import Creview from "../components/Creview";
import CreviewWrite from "../components/CreviewWrite";

export default function EventReviewRevisePage() {
  const children = "이벤트";
  const children1 = "이벤트";
  const children2 = "댓글 작성";
  const children3 = "수정";

  return (
    <div id="eventreviewrevisediv">
      <main id="eventreviewrevisemain">
        <CviewHeader children={children} children1={children1} />
        <Ccontent />
        <Creview />
        <CreviewWrite children={children2} children1={children3} />
      </main>
    </div>
  );
}
