import "../css/postviewpage.css";
import Header3 from "../components/Header3";
import CviewHeader from "../components/CviewHeader";
import Ccontent from "../components/Ccontent";
import Creview from "../components/Creview";
import CreviewWrite from "../components/CreviewWrite";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Creport from "../components/Creport";

export default function PostViewPage() {
  const children = "카테고리";
  const children1 = "공지사항";
  const children2 = "댓글 작성";
  const children3 = "등록";
  const [serchParams, setSearchParams] = useSearchParams();
  const [postView, setPostView] = useState([]);
  console.log(postView);
  useEffect(() => {
    axios
      .get("http://localhost:8080/postview?uid=" + serchParams.get("uid"))
      .then((resp) => {
        setPostView(resp.data);
      });
  }, []);
  return (
    <div id="postviewdiv">
      <Header3 />
      <main id="postviewmain">
        <div id="cviewheaderdiv">
          <div id="cviewheaderdiv1">
            <ul id="cviewheaderul1">
              <li>{children}</li>
              <li>
                <Creport></Creport>
              </li>
            </ul>
            <ul id="cviewheaderul2">
              <li>{postView.postTitle}</li>
            </ul>
            <ul id="cviewheaderul3">
              <li>작성자</li>
              <li>작성일 {postView.postCreatedAt}</li>
            </ul>
          </div>
        </div>
        <div>
          <div
            id="ccontent"
            dangerouslySetInnerHTML={{ __html: postView.postContent }}
          ></div>
          <div id="ccontentdiv1">
            <img src="/images/share.png" alt="share"></img>
          </div>
          <ul id="ccontentul1">
            <li>
              <img src="/images/Like.png" alt="Like"></img>
            </li>
            <li>
              <img src="/images/Save.png" alt="Save"></img>
            </li>
          </ul>
        </div>
        <Creview />
        <CreviewWrite children={children2} children1={children3} />
      </main>
    </div>
  );
}
