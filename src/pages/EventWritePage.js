import "../css/eventwritepage.css";

import CeventWriteSelect from "../components/CeventWriteSelect";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function EventWritePage() {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };
  return (
    <div>
      <main id="eventwritemain">
        <h1 id="eventwriteh1">이벤트 작성</h1>
        <form id="eventwriteform">
          <div id="eventwriteselect">
            <CeventWriteSelect></CeventWriteSelect>
          </div>
          <div id="eventwritephoto0">
            <div id="eventwritephoto">
              <div id="eventwritephoto1"></div>
              <button id="eventwritephoto2">이미지 등록</button>
            </div>
          </div>
          <div id="eventwriteeditor-container">
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
          <div id="eventwritediv">
            <button id="eventwritebutton">등록</button>
          </div>
        </form>
      </main>
    </div>
  );
}
