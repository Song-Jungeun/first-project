import "../css/reportlistpage.css";
import Header3 from "../components/Header3";
import CreportListHeader from "../components/CreportListHeader";
import Cselect from "../components/Cselect";
import CreportListContent from "../components/CreportListContent";
import Cnumber from "../components/Cnumber";

export default function ReportListPage() {
  return (
    <div id="repoetlistdiv">
      <Header3 />
      <h1 id="repoetlisth1">신고 내역</h1>
      <main id="reportlistmain">
        <Cselect />
        <CreportListHeader />
        <CreportListContent />
        <CreportListContent />
        <CreportListContent />
        <CreportListContent />
        <CreportListContent />
        <CreportListContent />
        <CreportListContent />
        <CreportListContent />
        <div id="reportlistdiv1">
          <Cnumber />
        </div>
      </main>
    </div>
  );
}
