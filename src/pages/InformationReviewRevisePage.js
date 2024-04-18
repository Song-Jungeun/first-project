import "../css/informationreviewrevisepage.css";
import Header3 from "../components/Header3";
import CviewHeader from "../components/CviewHeader";
import Ccontent from "../components/Ccontent";
import Creview from "../components/Creview";
import CreviewWrite from "../components/CreviewWrite";

export default function InformationReviewRevisePage() {
  const children = "정보글";
  const children1 = "정보글";
  const children2 = "댓글 작성";
  const children3 = "수정";

  return (
    <div id="informationreviewrevisediv">
      <Header3 />
      <main id="informationreviewrevisemain">
        <CviewHeader children={children} children1={children1} />
        <Ccontent />
        <Creview />
        <CreviewWrite children={children2} children1={children3} />
      </main>
    </div>
  );
}
