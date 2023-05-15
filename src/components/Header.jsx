import React from "react";
import logo from "../assets/logo.png";

const Header = ({ setIsShown, isShown }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" height={68} width={68} />
        <h1>Today I learned</h1>
      </div>

      <button
        className="btn btn-large"
        onClick={() => setIsShown((prev) => !prev)}
      >
        {isShown ? "Close" : "share a fact"}
      </button>
    </header>
  );
};

export default Header;
