import React from "react";
import ReactDOM from "react-dom";
import { FFmpegProvider } from "./context/FFmpegContext";
import App from "./views/App";
import "./css/mvp.css";

ReactDOM.render(
  <React.StrictMode>
    <FFmpegProvider>
      <App />
    </FFmpegProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
