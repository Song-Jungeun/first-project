import "../css/loginpage.css";
import Header3 from "../components/Header3";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
    console.log(loginFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", loginFormData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        const token = response.headers.authorization;
        localStorage.setItem("token", response.headers.authorization);
        navigate("/", { replace: true });
      });
  };

  return (
    <div>
      <Header3 />
      <main id="loginmain">
        <div id="login-section1">
          <h1 id="login-h1">로그인</h1>
          <form id="loginform" onSubmit={handleSubmit}>
            <input
              id="login-main1"
              type="text"
              name="username"
              value={loginFormData.username}
              onChange={handleInputChange}
              placeholder="아이디"
            />
            <br></br>
            <input
              id="login-main2"
              type="password"
              name="password"
              value={loginFormData.password}
              onChange={handleInputChange}
              placeholder="비밀번호"
            />
            <br></br>
            <input type="checkbox" id="ss" />
            <label id="ss2" for="ss">
              아이디 기억하기
            </label>
            <button id="findbutton1">
              <Link to="/find">아이디 / 비밀번호 찾기</Link>
            </button>
            <br></br>
            <button id="button2">
              <Link to="/signup">회원가입</Link>
            </button>
            <br></br>
            <button id="button3" type="submit">
              로그인
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
