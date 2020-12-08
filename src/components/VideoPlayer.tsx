import React from "react";

type ComponentProps = {
  src: string;
};

const VideoPlayer = ({ src }: ComponentProps) => {
  return <video controls src={src} style={{ height: "300px" }} />;
};

export default VideoPlayer;
