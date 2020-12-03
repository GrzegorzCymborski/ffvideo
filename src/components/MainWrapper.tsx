import React from "react";

type ComponentProps = {
  children: React.ReactChild;
};

const mainWrapper = ({ children }: ComponentProps) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {children}
    </div>
  );
};

export default mainWrapper;
