import "../css/inquiryviewpage.css";
import Header3 from "../components/Header3";
import CviewHeader2 from "../components/CviewHeader2";
import CinquiryReviewContent from "../components/CinquiryReviewContent";
import CreviseButton from "../components/CreviseButton";
import CdeleteButton from "../components/CdeleteButton";

export default function InquiryViewPage() {
  const children = "문의사항";
  const children1 = "문의사항";

  return (
    <div id="inquiryviewdiv">
      <Header3 />
      <main id="inquiryviewmain">
        <div id="inquiryviewdiv1">
          <CviewHeader2 children={children} children1={children1} />
        </div>
        <CinquiryReviewContent />
        <div id="inquiryviewdiv2">
          <p id="inquiryviewp">댓글</p>
          <div id="inquiryviewdiv2-1">
            <ul id="inquiryviewul">
              <li>작성자</li>
              <li>작성일0000.00.00</li>
            </ul>
            <ul id="inquiryviewul1">
              <li>댓글 내용입니다.</li>
              <li>
                <CreviseButton />
                <CdeleteButton />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
