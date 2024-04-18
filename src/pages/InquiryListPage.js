import "../css/inquirylistpage.css";
import Header3 from "../components/Header3";
import Cselect from "../components/Cselect";
import ClistContent from "../components/ClistContent";
import CpostButton from "../components/CpostButton";
import Cnumber from "../components/Cnumber";

export default function InquiryListPage() {
  return (
    <div id="inquirylistdiv">
      <Header3 />
      <main id="inquirylistmain">
        <h1 id="inquirylisth1">문의사항</h1>
        <Cselect></Cselect>
        <ClistContent />
        <div id="inquirylistdiv1">
          <CpostButton />
        </div>
        <div id="inquirylistdiv2">
          <Cnumber />
        </div>
      </main>
    </div>
  );
}
