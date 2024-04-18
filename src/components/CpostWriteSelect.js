import "../css/cpostwriteselect.css";

export default function CpostWriteSelect() {
  return (
    <div>
      <div id="cpostwriteselect2">
        <select id="cpostwriteselect2-1">
          <option value="" hidden>
            카테고리
          </option>
          <option value="1">일상</option>
          <option value="2">요리</option>
          <option value="3">기타</option>
        </select>
      </div>
    </div>
  );
}
