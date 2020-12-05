import React from "react";
import { useFFmpeg } from "../context/FFmpegContext";
import { ReactComponent as UploadIcon } from "../assets/uploadIcon.svg";

const InputVideo = () => {
  const { setVideo } = useFFmpeg();
  return (
    <>
      <label htmlFor="fileUpload">
        <div style={{ width: "150px", height: "150px", cursor: "pointer" }}>
          <UploadIcon fill="#943434" />
        </div>
      </label>
      <input
        style={{ display: "none" }}
        type="file"
        accept="video/*"
        id="fileUpload"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVideo(e.target.files?.item(0))}
      />
    </>
  );
};

export default InputVideo;
