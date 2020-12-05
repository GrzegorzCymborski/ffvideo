import React from "react";

type ComponentProps = {
  action: () => void;
  text: string;
};

const Button = ({ action, text }: ComponentProps) => {
  return <button onClick={action}>{text}</button>;
};

export default Button;
