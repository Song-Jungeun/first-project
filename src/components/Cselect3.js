import "../css/cselect2.css";

export default function Cselect2() {
  return (
    <div id="Cselect2div">
      <select id="Cselsect2select1" required>
        <option value="" hidden>
          작성자 연령대
        </option>
        <option value="1">10대</option>
        <option value="2">20대</option>
        <option value="3">30대</option>
      </select>
    </div>
  );
}
