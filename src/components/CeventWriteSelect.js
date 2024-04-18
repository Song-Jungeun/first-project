import "../css/ceventwriteselect.css";

export default function CeventWriteSelect() {
  return (
    <div id="ceventwriteselecttmain">
      <input id="ceventwriteselectselect1" type="text" placeholder="글제목" />
      <div id="ceventwriteselect2">
        <select id="ceventwriteselect2-1">
          <option>미정</option>
          <option>미정</option>
          <option>미정</option>
        </select>
        <input
          id="ceventwriteselectdate"
          type="date"
          placeholder="이벤트 시작일"
        ></input>
        <input
          id="ceventwriteselectdate1"
          type="date"
          placeholder="이벤트 종료알"
        ></input>
      </div>
    </div>
  );
}
