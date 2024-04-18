import "../css/creviewdelete.css";

export default function CreviewDelete() {
  return (
    <div id="creviewdelete">
      <div id="creviewdeletediv1">
        <ul id="creviewdeleteul1">
          <li>작성자</li>
          <li>작성일 0000.00.00</li>
        </ul>
        <ul id="creviewdeleteul2">
          <li>댓글 내용입니다.</li>
        </ul>
      </div>
      <p id="creviewdeletep">위 댓글을 삭제하시겠습니까?</p>
      <from id="creviewdeletefrom">
        <div id="creviewdeletediv3">
          <button className="creviewdeletebutton" type="submit">
            확인
          </button>
          <button className="creviewdeletebutton" type="submit">
            취소
          </button>
        </div>
      </from>
    </div>
  );
}
