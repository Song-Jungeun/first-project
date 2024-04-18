import "../css/noticereviewrevisepage.css";
import Header3 from "../components/Header3";
import CviewHeader from "../components/CviewHeader";
import Ccontent from "../components/Ccontent";
import Creview from "../components/Creview";
import CreviewWrite from "../components/CreviewWrite";

export default function NoticeReviewRevisePage() {
  const children = "공지사항";
  const children1 = "공지사항";
  const children2 = "댓글 작성";
  const children3 = "수정";

  return (
    <div id="noticereviewrevisediv">
      <Header3 />
      <main id="noticereviewreviseemain">
        <CviewHeader children={children} children1={children1} />
        <Ccontent />
        <Creview />
        <CreviewWrite children={children2} children1={children3} />
      </main>
    </div>
  );
}
