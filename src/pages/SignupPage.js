import "../css/signup.css";
import Header3 from "../components/Header3";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    userid: "",
    userpw: "",
    nickname: "",
    birthdate: "",
    phonenumber: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/signup", formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        navigate("/", { replace: true });
      });
  };

  return (
    <div>
      <Header3 />
      <main id="signupmain">
        <div id="signupdiv">
          <h2 id="signup-h2">회원가입</h2>
          <form id="signupform" onSubmit={handleSubmit}>
            <div id="signupmainform">
              <p>이름</p>
              <input
                id="form-name"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              ></input>
              <p>생년월일</p>
              <input
                id="form-date"
                type="date"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleInputChange}
              ></input>
              <p>전화번호</p>
              <input
                id="form-tel"
                type="tel"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleInputChange}
              ></input>

              <p>이메일</p>
              <input
                id="form-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              ></input>
              <p>아이디</p>
              <input
                id="form-id"
                type="text"
                name="userid"
                value={formData.userid}
                onChange={handleInputChange}
              ></input>

              <p>닉네임</p>
              <input
                id="form-nickname"
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleInputChange}
              ></input>

              <p>비밀번호</p>
              <input
                id="form-pw"
                type="password"
                name="userpw"
                value={formData.userpw}
                onChange={handleInputChange}
              ></input>

              <div id="agree">
                <p>개인정보처리방침</p>
                <div></div>
                <input type="checkbox" id="agreecheck" />
                <label id="agreecheckname" for="agreecheck">
                  위 내용에 동의합니다.
                </label>
              </div>
              <div id="agree2">
                <p>이용약관 동의</p>
                <div></div>
                <input type="checkbox" id="agreecheck2" />
                <label id="agreecheckname2" for="agreecheck2">
                  위 내용에 동의합니다.
                </label>
              </div>
            </div>
            <button id="signupbutton" type="submit">
              회원가입
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
