import "../css/reportwritepage.css";
import Header3 from "../components/Header3";

export default function ReportWritePage() {
  return (
    <div id="reportwritepagediv">
      <Header3 />
      <h1 id="reportwritepageh1">신고</h1>
      <main id="reportwritepagemain">
        <div id="reportwritepagediv1">
          <p>신고할 부분 캡처본</p>
          <div id="reportwritepagediv1-1"></div>
          <button id="reportwritepagediv1-2">이미지 등록</button>
        </div>
        <div id="reportwritepagediv2">
          <p>신고 사유</p>
          <input id="reportwritepageinput1-1" type="text"></input>
        </div>
        <div id="reportwritepagediv3">
          <button>신고</button>
        </div>
      </main>
    </div>
  );
}
