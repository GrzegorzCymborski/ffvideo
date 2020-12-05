import React from "react";
import { useFFmpeg } from "../context/FFmpegContext";
import processing from "../assets/processing.png";

const ProcessingInfo = () => {
  const { currentProgress } = useFFmpeg();

  return (
    <div
      style={{
        width: "45%",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={processing}
        alt="processing"
        style={{ width: "100%", height: "auto"}}
      />
      <div style={{ width: "90%", height: "20px", border: "1px solid green" }}>
        <div style={{ width: `${currentProgress}%`, height: "100%", backgroundColor: "#D82D2D" }} />
      </div>
    </div>
  );
};

export default ProcessingInfo;
