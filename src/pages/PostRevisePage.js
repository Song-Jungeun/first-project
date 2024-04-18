import "../css/postrevisepage.css";

import CpostWriteSelect from "../components/CpostWriteSelect";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function PostRevisePage() {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };
  return (
    <div>
      <main id="postrevisemain">
        <h1 id="postrevish1">게시글 수정</h1>
        <form id="postrevisform">
          <div id="postrevisselect">
            <CpostWriteSelect></CpostWriteSelect>
          </div>
          <div id="postreviseditor-container">
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
          <div id="postrevisediv">
            <button id="postrevisbutton">수정</button>
          </div>
        </form>
      </main>
    </div>
  );
}
