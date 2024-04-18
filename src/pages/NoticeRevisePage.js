import "../css/noticerevisepage.css";
import Header3 from "../components/Header3";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function NoticeRevisePage() {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };
  return (
    <div>
      <Header3 />
      <main id="noticerevisemain">
        <h1 id="noticereviseh1">공지사항 수정</h1>
        <form id="noticereviseform">
          <input id="noticerevisetitle" type="text" placeholder="글제목" />
          <div id="noticereviseeditor-container">
            <ReactQuill
              value={content}
              onChange={handleChange}
              style={{ height: "720px" }}
              modules={{
                toolbar: [
                  [{ font: [] }],
                  [{ size: ["small", false, "large", "huge"] }],
                  ,
                  ["bold", "strike", "underline", "italic"],
                  [{ color: [] }],
                  [
                    { align: ["justify"] },
                    { align: ["center"] },
                    { align: [""] },
                    { align: ["right"] },
                  ],
                  [{ indent: "-1" }, { indent: "+1" }],
                  [{ list: "bullet" }, { list: "ordered" }],
                  ["link", "image"],
                ],
              }}
            />
          </div>
          <div id="noticerevisediv">
            <button id="noticerevisebutton">수정</button>
          </div>
        </form>
      </main>
    </div>
  );
}
