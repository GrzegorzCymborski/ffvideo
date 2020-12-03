import React from "react";

type ComponentProps = {
  progress: number
}

const ProgressNumber = ({ progress }: ComponentProps) => {
  return <p>Progress: {progress}%</p>;
};

export default ProgressNumber;
