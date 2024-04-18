import "../css/cdelete.css";

export default function Cdelete({ children, children1 }) {
  return (
    <div id="cdelete">
      <div id="cdeletediv1">
        <ul id="cdeleteul1">
          <li>{children}</li>
          <li>{children1} 제목입니다.</li>
        </ul>
        <ul id="cdeleteul2">
          <li>작성자</li>
          <li>작성일 0000.00.00</li>
        </ul>
      </div>
      <div id="cdeletediv2">
        <p>{children1} 내용입니다.</p>
      </div>
      <p id="cedeletep">위 {children1}을(를) 삭제하시겠습니까?</p>
      <from id="cdeletefrom">
        <div id="cdeletediv3">
          <button className="cdeletebutton" type="submit">
            확인
          </button>
          <button className="cdeletebutton" type="submit">
            취소
          </button>
        </div>
      </from>
    </div>
  );
}
