import React, { useState, useEffect } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const ffpmeg = createFFmpeg({ log: true });

const App: React.FunctionComponent = () => {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState<Buffer | File | null>();
  const [gif, setGif] = useState<string>();

  const load = async () => {
    await ffpmeg.load();
    setReady(true);
  };

  useEffect(() => {
    load();
  }, []);

  const mp4Container = [
    "-i",
    "test.mp4",
    // "-t",
    // "2.5",
    // "-ss",
    // "2.0",
    // "-vf",
    // "hue=s=0",
    "-f",
    "mp4",
    "-pix_fmt",
    "yuv420p",
    "out.mp4",
  ];


  const convertToGif = async () => {
    ffpmeg.FS("writeFile", "test.mp4", await fetchFile(video as Buffer));
    await ffpmeg.run(...mp4Container);
    const data = ffpmeg.FS("readFile", "out.mp4");
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "video/mp4" })
    );
    setGif(url);
  };

  const loaded = (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {video && (
        <video controls height="350" src={URL.createObjectURL(video)} />
      )}
      <input
        type="file"
        accept="video/*"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setVideo(e.target.files?.item(0))
        }
      />
      <h3>Result</h3>
      <button onClick={convertToGif}>Convert</button>
      {gif && <video controls src={gif} height="350" />}
    </div>
  );

  const notLoaded = <h1>Loading...</h1>;

  return ready ? loaded : notLoaded;
};

export default App;
