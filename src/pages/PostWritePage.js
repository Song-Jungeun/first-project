import "../css/postwritepage.css";
import Header3 from "../components/Header3";
import CpostWriteSelect from "../components/CpostWriteSelect";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import CpostWriteSelect1 from "../components/CpostWriteSelect1";
import "../css/cpostwriteselect.css";

export default function PostWritePage() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const handleChange = (value) => {
    setPostWriteFormData({
      ...postWriteFormData,
      postContent: value,
    });
    console.log(postWriteFormData);
  };

  const [postWriteFormData, setPostWriteFormData] = useState({
    categoryUid: "1",
    ageUid: "1",
    postTitle: "",
    postContent: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPostWriteFormData({
      ...postWriteFormData,
      [name]: value,
    });
    console.log(postWriteFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/postwrite", postWriteFormData, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        navigate("/postlist", { replace: true });
      });
  };

  return (
    <div>
      <Header3 />
      <main id="postwritemain">
        <h1 id="postwriteh1">게시글 작성</h1>
        <form id="postwriteform" onSubmit={handleSubmit}>
          <div id="postwriteselect">
            <div id="cpostwriteselectmain">
              <input
                id="cpostwriteselect1"
                type="text"
                placeholder="글제목"
                name="postTitle"
                value={postWriteFormData.postTitle}
                onChange={handleInputChange}
              />
              <div id="CpostWriteSelectdiv">
                <CpostWriteSelect
                  name="categoryUid"
                  value={postWriteFormData.categoryUid}
                  onChange={handleInputChange}
                ></CpostWriteSelect>
                <CpostWriteSelect1
                  name="ageUid"
                  value={postWriteFormData.ageUid}
                  onChange={handleInputChange}
                ></CpostWriteSelect1>
              </div>
            </div>
          </div>
          <div id="postwriteeditor-container">
            <ReactQuill
              value={postWriteFormData.postContent}
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
          <div id="postwritediv">
            <button id="postwritebutton" type="submit">
              등록
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
