import React, { useContext, useState, useEffect } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import mp4Container from "../utils/convertSettings";

type Nil<T> = T | null;
type ComponentProps = {
  children: React.ReactChild;
};
type FFmpegData = {
  ready: boolean;
  processing: boolean;
  setVideo: any;
  video: Buffer | File | null;
  handleConvert: () => void;
  outputFile: string;
  currentProgress: number;
  handleCancel: () => void;
  handleDownload: () => void;
};

const FFmpegContext = React.createContext<Nil<FFmpegData>>(null);
const ffpmeg = createFFmpeg({ log: false });

export function useFFmpeg() {
  return useContext(FFmpegContext) as FFmpegData;
}

export function FFmpegProvider({ children }: ComponentProps) {
  const [ready, setReady] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);
  const [video, setVideo] = useState<Buffer | File | null>(null);
  const [outputFile, setOutput] = useState<string>("");
  const [currentProgress, setCurrentProgress] = useState<number>(0);

  ffpmeg.setProgress(({ ratio }) => {
    setCurrentProgress(Math.trunc(ratio * 100));
  });

  const load = async () => {
    await ffpmeg.load();
    setReady(true);
  };

  useEffect(() => {
    load();
  }, []);

  const handleConvert = async () => {
    setProcessing(true);
    ffpmeg.FS("writeFile", "test.mp4", await fetchFile(video as Buffer));
    await ffpmeg.run(...mp4Container);
    const data = ffpmeg.FS("readFile", "out.mp4");
    const url = URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }));
    setOutput(url);
    setProcessing(false);
  };

  const handleCancel = () => {
    setVideo(null);
    setOutput("");
    setCurrentProgress(0);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    element.href = outputFile;
    element.download = `converted.mp4`;
    document.body.appendChild(element);
    element.click();
  };

  const value = {
    ready,
    setVideo,
    video,
    handleConvert,
    outputFile,
    currentProgress,
    handleCancel,
    handleDownload,
    processing,
  };

  return <FFmpegContext.Provider value={value}>{children}</FFmpegContext.Provider>;
}
