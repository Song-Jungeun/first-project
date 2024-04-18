import "../css/inquiryreviewrevisepage.css";
import Header3 from "../components/Header3";
import CviewHeader2 from "../components/CviewHeader2";
import CinquiryReviewContent from "../components/CinquiryReviewContent";
import CreviewWrite from "../components/CreviewWrite";

export default function InquiryReviewRevisePage() {
  const children = "카테고리";
  const children1 = "문의사항";
  const children2 = "답변 작성";
  const children3 = "수정";

  return (
    <div id="inquiryreviewrevisediv">
      <Header3 />
      <main id="inquiryreviewrevisemain">
        <h1 id="inquiryreviewreviseh1">문의사항 답변 수정</h1>

        <div id="inquiryreviewrevisediv1">
          <p id="inquiryreviewrevisep">문의사항</p>
          <CviewHeader2 children={children} children1={children1} />
        </div>
        <CinquiryReviewContent />
        <div id="inquiryreviewrevisediv2">
          <CreviewWrite children={children2} children1={children3} />
        </div>
      </main>
    </div>
  );
}
