import "../css/inquiryreviewpage.css";
import Header3 from "../components/Header3";
import CviewHeader2 from "../components/CviewHeader2";
import CinquiryReviewContent from "../components/CinquiryReviewContent";
import CreviewWrite from "../components/CreviewWrite";

export default function InquiryReviewPage() {
  const children = "카테고리";
  const children1 = "문의사항";
  const children2 = "답변 작성";
  const children3 = "등록";

  return (
    <div id="inquiryreviewdiv">
      <Header3 />
      <main id="inquiryreviewmain">
        <h1 id="inquiryreviewh1">문의사항 답변</h1>

        <div id="inquiryreviewdiv1">
          <p id="inquiryreviewp">문의사항</p>
          <CviewHeader2 children={children} children1={children1} />
        </div>
        <CinquiryReviewContent />
        <div id="inquiryreviewdiv2">
          <CreviewWrite children={children2} children1={children3} />
        </div>
      </main>
    </div>
  );
}
