import "../css/creportlistheader.css";

export default function CreportListHeader() {
  return (
    <div id="creportlistheaderdiv">
      <ul id="creportlistheaderul">
        <li>NO.</li>
        <li>카테고리</li>
        <li>
          신고 게시글 <br />/ 댓글 번호
        </li>
        <li>신고 사유</li>
        <li>처리여부</li>
        <li>신고자</li>
        <li>신고일</li>
      </ul>
    </div>
  );
}
