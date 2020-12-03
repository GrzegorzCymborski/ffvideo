import React, { useEffect } from "react";

type ComponentProps = {
  src: string;
};

const VideoPlayer = ({ src }: ComponentProps) => {
  useEffect(() => console.log("leci rerender"),[]);

  return <video controls src={src} style={{ height: "300px" }} />;
};

export default VideoPlayer;
