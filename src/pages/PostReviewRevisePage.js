import "../css/postreviewrevisepage.css";

import CviewHeader from "../components/CviewHeader";
import Ccontent from "../components/Ccontent";
import Creview from "../components/Creview";
import CreviewWrite from "../components/CreviewWrite";

export default function PostReviewRevise() {
  const children = "카테고리";
  const children1 = "게시글";
  const children2 = "댓글 작성";
  const children3 = "수정";

  return (
    <div id="postreviewrevise">
      <main id="postreviewrevisemain">
        <CviewHeader children={children} children1={children1} />
        <Ccontent />
        <Creview />
        <CreviewWrite children={children2} children1={children3} />
      </main>
    </div>
  );
}
