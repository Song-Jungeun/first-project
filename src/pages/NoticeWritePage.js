import "../css/noticewritepage.css";
import Header3 from "../components/Header3";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function NoticeWritePage() {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };
  return (
    <div>
      <Header3 />
      <main id="noticewritemain">
        <h1 id="noticewriteh1">공지사항 작성</h1>
        <form id="noticewriteform">
          <input id="noticewritetitle" type="text" placeholder="글제목" />
          <div id="noticewriteeditor-container">
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
          <div id="noticewriteediv">
            <button id="noticewritebutton">등록</button>
          </div>
        </form>
      </main>
    </div>
  );
}
