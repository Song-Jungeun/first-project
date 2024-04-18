import "../css/creviewwrite.css";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreviewWrite({ children, children1 }) {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div id="creviewwritediv">
      <h1 id="creviewwriteh1">{children}</h1>
      <div id="creviewwritediv1">
        <ReactQuill
          id="creviewwriteQuill"
          value={content}
          placeholder="댓글 내용입니다."
          onChange={handleChange}
          modules={{
            toolbar: [["link", "image"]],
          }}
        />
      </div>
      <button id="creviewwritebutton">{children1}</button>
    </div>
  );
}
