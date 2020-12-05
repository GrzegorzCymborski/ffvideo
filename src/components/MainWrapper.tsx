import React from "react";
import logo from "../assets/logo.png";

type ComponentProps = {
  children: React.ReactChild;
};

const mainWrapper = ({ children }: ComponentProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img src={logo} alt="main logo"/>
      {children}
    </div>
  );
};

export default mainWrapper;
