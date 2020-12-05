import React from "react";
import logo from "../assets/logo.png";

type ComponentProps = {
  children: React.ReactChild;
};

const mainWrapper = ({ children }: ComponentProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1024px",
        margin: "0 auto",
      }}
    >
      <img
        src={logo}
        alt="main logo"
        style={{
          marginBottom: "20px",
        }}
      />
      {children}
    </div>
  );
};

export default mainWrapper;
