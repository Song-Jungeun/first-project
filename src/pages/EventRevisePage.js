import "../css/eventrevisepage.css";

import CeventWriteSelect from "../components/CeventWriteSelect";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function EventRevisePage() {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };
  return (
    <div>
      <main id="eventrevisemain">
        <h1 id="eventreviseh1">이벤트 수정</h1>
        <form id="eventreviseform">
          <div id="eventreviseselect">
            <CeventWriteSelect></CeventWriteSelect>
          </div>
          <div id="eventrevisephoto0">
            <div id="eventrevisephoto">
              <div id="eventrevisephoto1"></div>
              <button id="eventrevisephoto2">이미지 등록</button>
            </div>
          </div>
          <div id="eventreviseeditor-container">
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
          <div id="eventrevisediv">
            <button id="eventrevisebutton">수정</button>
          </div>
        </form>
      </main>
    </div>
  );
}
