import React from "react";
import { useFFmpeg } from "../context/FFmpegContext";
import ProgressNumber from "../components/ProgressNumber";
import VideoPlayer from "../components/VideoPlayer";
import InputVideo from "../components/InputVideo";
import MainWrapper from "../components/MainWrapper";

const App = () => {
  const {
    ready,
    video,
    handleConvert,
    outputFile,
    currentProgress,
    handleCancel,
    handleDownload,
  } = useFFmpeg();

  return (
    <MainWrapper>
      {ready ? (
        <>
          {video && !outputFile && (
            <VideoPlayer src={URL.createObjectURL(video)} />
          )}
          {!video && <InputVideo />}
          {currentProgress > 1 && <ProgressNumber progress={currentProgress} />}
          {video && (
            <>
              <div>
                {!outputFile && currentProgress === 0 && (
                  <button onClick={handleConvert}>Convert</button>
                )}
                {!outputFile && currentProgress === 0 && (
                  <button onClick={handleCancel}>Cancel</button>
                )}
              </div>
              {outputFile && <VideoPlayer src={outputFile} />}
              <div>
                {outputFile && (
                  <button onClick={handleDownload}>Download</button>
                )}
                {outputFile && <button onClick={handleCancel}>Cancel</button>}
              </div>
            </>
          )}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </MainWrapper>
  );
};

export default App;
