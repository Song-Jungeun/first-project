import "../css/informationdeletepage.css";
import Cdelete from "../components/Cdelete";

export default function InformationDeletePage() {
  const children = "정보";
  const children1 = "정보";

  return (
    <div id="informationdeletediv">
      <Cdelete children={children} children1={children1}></Cdelete>
    </div>
  );
}
