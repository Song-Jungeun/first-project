import "../css/informationwritepage.css";
import Header3 from "../components/Header3";
import CinformationWriteSelect from "../components/CinformationWriteSelect";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function InformationWritePage() {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };
  return (
    <div>
      <Header3 />
      <main id="informationwritemain">
        <h1 id="informationwriteh1">공지사항 작성</h1>
        <form id="informationwriteform">
          <div id="informationwriteselect">
            <CinformationWriteSelect></CinformationWriteSelect>
          </div>
          <div id="informationwritephoto0">
            <div id="informationwritephoto">
              <div id="informationwritephoto1"></div>
              <button id="informationwritephoto2">이미지 등록</button>
            </div>
          </div>
          <div id="informationwriteeditor-container">
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
          <div id="informationwritediv">
            <button id="informationwritebutton">등록</button>
          </div>
        </form>
      </main>
    </div>
  );
}
