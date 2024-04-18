import "../css/postdeletepage.css";
import Cdelete from "../components/Cdelete";

export default function PostDeletePage() {
  const children = "카테고리";
  const children1 = "게시글";

  return (
    <div>
      <main id="postdeletemain">
        <Cdelete children={children} children1={children1}></Cdelete>
      </main>
    </div>
  );
}
