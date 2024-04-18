import "../css/myrevise.css";
import Header3 from "../components/Header3";

export default function MyRevisePage() {
  return (
    <div>
      <Header3 />
      <main id="myrevisemain">
        <div>
          <h1 id="myreviseh1">정보수정</h1>
          <form id="myreviseform">
            <div id="signupmainform">
              <p>이름</p>
              <input id="form-revisename" type="text"></input>
              <p>생년월일</p>
              <input id="form-revisedate" type="date"></input>
              <p>전화번호 변경</p>
              <input id="form-revisetel" type="tel"></input>
              <p>본인인증</p>
              <button id="form-revisecertification">본인인증</button>
              <p>이메일 변경</p>
              <input id="form-reviseemail" type="email"></input>
              <p>아이디 변경</p>
              <input id="form-reviseid" type="text"></input>
              <button id="reviseid-check">중복확인</button>
              <p>닉네임 변경</p>
              <input id="form-revisenickname" type="text"></input>
              <button id="revisenickname-check">중복확인</button>
              <p>비밀번호 변경</p>
              <input id="form-revisepw" type="password"></input>
              <button id="revisepw-check">본인인증</button>
              <p>비밀번호 확인하기</p>
              <input id="form-revisepwcheck" type="password"></input>
            </div>
            <button id="myrevicebutton" type="submit">
              정보 수정
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
