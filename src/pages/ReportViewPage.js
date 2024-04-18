import "../css/reportviewpage.css";
import Header3 from "../components/Header3";
import CreportCapture from "../components/CreportCapture";

export default function ReportViewPage() {
  return (
    <div id="reportviewdiv">
      <Header3 />
      <h1 id="reportviewh1">신고</h1>
      <main id="reportviewmain">
        <div id="reportviewdiv1">
          <p>신고 게시글 / 댓글</p>
          <div id="reportviewdiv1-1">
            <p>카테고리</p>
            <p>게시글 제목입니다.</p>
            <p>작성자</p>
            <div id="reportviewdiv1-2">
              <ul id="reportviewul">
                <li>작성자</li>
                <li>작성일 0000.00.00</li>
              </ul>
              <p>댓글 내용입니다.</p>
            </div>
          </div>
        </div>
        <CreportCapture></CreportCapture>
        <div id="reportviewdiv2">
          <p>신고 사유</p>
          <input
            id="reportviewdiv2-1"
            type="text"
            placeholder="신고 사유입니다."
          ></input>
        </div>
        <div id="reportviewdiv3">
          <p>처리 방법</p>
          <input
            id="reportviewdiv3-1"
            type="text"
            placeholder="처리 방법입니다."
          ></input>
        </div>
        <div id="reportviewdiv4">
          <button id="reportviewdiv4-1">완료</button>
        </div>
      </main>
    </div>
  );
}
