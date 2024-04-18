import "../css/inquirywritepage.css";
import Header3 from "../components/Header3";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CregisterButton from "../components/CregisterButton";

export default function InquiryWritePage() {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div id="inquirywritediv">
      <Header3 />
      <main id="inquirywritemain">
        <h1 id="inquirywriteh1">문의사항 작성</h1>
        <form id="inquitywriteform">
          <input
            id="inquitywritetitle"
            type="text"
            placeholder="글 제목"
          ></input>
          <select id="inquitywrtecg" required>
            <option value="" disabled selected>
              카테고리
            </option>
            <option>미정</option>
            <option>미정</option>
            <option>미정</option>
          </select>
          <ReactQuill
            id="inquitywrtequill"
            value={content}
            placeholder="문의사항 내용입니다."
            onChange={handleChange}
            modules={{
              toolbar: [["link", "image"]],
            }}
          />
          <CregisterButton></CregisterButton>
        </form>
      </main>
    </div>
  );
}
