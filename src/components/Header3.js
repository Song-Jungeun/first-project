import React from "react";
import Header from "../components/Header";
import Header2 from "../components/Header2";

const Header3 = () => {
  const isLoggedIn = localStorage.getItem("token") !== null;

  return (
    <div>
      <div>{isLoggedIn ? <Header2 /> : <Header />}</div>
    </div>
  );
};

export default Header3;
