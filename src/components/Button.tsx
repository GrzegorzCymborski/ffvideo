import React from "react";
import cancel from "../assets/cancel.png";
import convert from "../assets/convert.png";
import download from "../assets/download.png";
import newJob from "../assets/newJob.png";

type ComponentProps = {
  action: () => void;
  type: string;
};

const Button = ({ action, type }: ComponentProps) => {
  let btnType;

  switch (type) {
    case "Convert":
      btnType = convert;
      break;
    case "Cancel":
      btnType = cancel;
      break;
    case "Download":
      btnType = download;
      break;
    case "New Job":
      btnType = newJob;
      break;
  }

  return <img style={{ cursor: "pointer" }} src={btnType} onClick={action} />;
};

export default Button;
