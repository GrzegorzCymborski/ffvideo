import React from "react";
import { useFFmpeg } from "../context/FFmpegContext";

const InputVideo = () => {
  const { setVideo } = useFFmpeg();
  return (
    <input
      type="file"
      accept="video/*"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setVideo(e.target.files?.item(0))
      }
    />
  );
};

export default InputVideo;
