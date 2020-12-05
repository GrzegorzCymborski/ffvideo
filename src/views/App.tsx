import React from "react";
import { useFFmpeg } from "../context/FFmpegContext";
import ProgressNumber from "../components/ProgressNumber";
import VideoPlayer from "../components/VideoPlayer";
import InputVideo from "../components/InputVideo";
import MainWrapper from "../components/MainWrapper";
import Loading from "../components/Loading";
import Button from "../components/Button";

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

  const mainVideoLoaded = !outputFile && currentProgress === 0;

  return (
    <MainWrapper>
      {ready ? (
        <>
          {video && !outputFile && <VideoPlayer src={URL.createObjectURL(video)} />}

          {!video && <InputVideo />}

          {currentProgress > 1 && <ProgressNumber progress={currentProgress} />}
        
          {video && (
            <>
              <div>
                {mainVideoLoaded && <Button action={handleConvert} text="Convert" />}
                {mainVideoLoaded && <Button action={handleCancel} text="Cancel" />}
              </div>

              {outputFile && <VideoPlayer src={outputFile} />}

              <div>
                {outputFile && <Button action={handleDownload} text="Download" />}
                {outputFile && <Button action={handleCancel} text="Cancel" />}
              </div>
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </MainWrapper>
  );
};

export default App;
