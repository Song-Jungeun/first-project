import "../css/noticedeletepage.css";
import Cdelete from "../components/Cdelete";

export default function NoticeDeletePage() {
  const children = "공지사항";
  const children1 = "공지사항";

  return (
    <div id="noticedeletediv">
      <Cdelete children={children} children1={children1}></Cdelete>
    </div>
  );
}
