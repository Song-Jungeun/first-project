import "../css/cselect2.css";

export default function Cselect2() {
  return (
    <div id="Cselect2div">
      <select id="Cselsect2select" required>
        <option value="" hidden>
          카테고리
        </option>
        <option value="1">일상</option>
        <option value="2">요리</option>
        <option value="3">기타</option>
      </select>
    </div>
  );
}
