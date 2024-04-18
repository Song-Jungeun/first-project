import "../css/cselect.css";

export default function Cselect() {
  return (
    <div id="Cselsect">
      <div id="Cselsectsection1">
        <select id="Cselsectselect" required>
          <option value="" disabled selected>
            전체
          </option>
          <option>제목</option>
          <option>내용</option>
        </select>

        <input id="Cselsectselect1" type="text"></input>
        <button id="Cselsectselect2" type="sumbit">
          <img src="/images/search.png" alt="plus" />
        </button>
      </div>
    </div>
  );
}
