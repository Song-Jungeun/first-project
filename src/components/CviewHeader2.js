import "../css/cviewheader2.css";

export default function CviewHeader2({ children, children1 }) {
  return (
    <div id="cviewheader2div">
      <div id="cviewheader2div1">
        <ul id="cviewheader2ul1">
          <li>{children}</li>
        </ul>
        <ul id="cviewheader2ul2">
          <li>{children1} 제목입니다.</li>
        </ul>
        <ul id="cviewheader2ul3">
          <li>작성자</li>
          <li>작성일 0000.00.00</li>
        </ul>
      </div>
    </div>
  );
}
