import "../css/deleteaccountpage.css";

export default function DeleteAccountPage() {
  return (
    <div>
      <main id="deleteaccountmain">
        <hl id="deleteaccounth1">회원탈퇴</hl>
        <div id="deleteaccountdiv">
          <form id="deleteaccountform">
            <p>탈퇴사유</p>
            <textarea
              id="deletaccount-reason"
              placeholder="탈퇴사유"
            ></textarea>
            <p>탈퇴안내</p>
            <div id="deletaccount-inform"></div>
            <p>비밀번호 확인하기</p>
            <input id="deletaccount-pwcheck" type="password"></input>
            <br></br>
            <div id="deleteaccount-chack">
              <input type="checkbox" id="deleteaccount-informcheck" />
              <label id="deleteaccount-checkname" for="informcheck">
                위 내용에 동의합니다.
              </label>
            </div>
            <button id="deleteaccountbutton" type="submit">
              탈퇴
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
