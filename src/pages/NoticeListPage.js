import "../css/noticelistpage.css";
import Header3 from "../components/Header3";
import Cselect from "../components/Cselect";
import Ccondition from "../components/Ccondition";
import ClistContent from "../components/ClistContent";
import CpostButton from "../components/CpostButton";
import Cnumber from "../components/Cnumber";

export default function NoticeListPage() {
  return (
    <div id="noticelistdiv">
      <Header3 />
      <main id="noticelistmain">
        <h1 id="noticelisth1">공지사항</h1>
        <Cselect></Cselect>
        <div id="noticelistdiv0">
          <Ccondition />
        </div>
        <ClistContent />
        <div id="noticelistdiv1">
          <CpostButton />
        </div>
        <div id="noticelistdiv2">
          <Cnumber />
        </div>
      </main>
    </div>
  );
}
