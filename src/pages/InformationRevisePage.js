import "../css/informationrevisepage.css";
import Header3 from "../components/Header3";
import CinformationWriteSelect from "../components/CinformationWriteSelect";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function InformationRevisePage() {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };
  return (
    <div>
      <Header3 />
      <main id="informationrevisemain">
        <h1 id="informationreviseh1">공지사항 수정</h1>
        <form id="informationreviseform">
          <div id="informationreviseselect">
            <CinformationWriteSelect></CinformationWriteSelect>
          </div>
          <div id="informationrevisephoto0">
            <div id="informationrevisephoto">
              <div id="informationrevisephoto1"></div>
              <button id="informationrevisephoto2">이미지 등록</button>
            </div>
          </div>
          <div id="informationreviseeditor-container">
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
          <div id="informationrevisediv">
            <button id="informationrevisebutton">수정</button>
          </div>
        </form>
      </main>
    </div>
  );
}
