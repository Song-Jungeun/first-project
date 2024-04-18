import "../css/findpage.css";

export default function FindPage() {
  return (
    <div>
      <main id="findpagemain">
        <h1 id="findh1">아이디 / 비밀번호 찾기</h1>
        <div id="findsection">
          <div id="findsection1">
            <form id="findidform">
              <p>아이디 찾기</p>
              <ul>
                <li>
                  이름
                  <input className="find-name" type="text"></input>
                </li>
                <li>
                  전화번호
                  <input className="find-tel" type="tel"></input>
                  <br></br>
                  <button className="find-check">본인인증</button>
                </li>
              </ul>
              <button id="findidbutton" type="submit">
                아이디 찾기
              </button>
            </form>
            <div id="find-id">찾은 아이디는 ㅇㅇㅇ입니다.</div>
          </div>

          <div id="findsection2">
            <div id="findsection2">
              <form id="findidform2">
                <p>비밀번호 찾기</p>
                <ul>
                  <li>
                    이름
                    <input className="find-name" type="text"></input>
                  </li>
                  <li>
                    전화번호
                    <input className="find-tel" type="tel"></input>
                    <br></br>
                    <button className="find-check">본인인증</button>
                  </li>
                </ul>
                <button id="findpwbutton" type="submit">
                  비밀번호 찾기
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
