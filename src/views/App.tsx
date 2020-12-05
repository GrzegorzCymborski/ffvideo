import React from "react";
import { useFFmpeg } from "../context/FFmpegContext";
import ProgressNumber from "../components/ProgressNumber";
import VideoPlayer from "../components/VideoPlayer";
import InputVideo from "../components/InputVideo";
import MainWrapper from "../components/MainWrapper";
import Loading from "../components/Loading";
import Button from "../components/Button";
import buttonTypes from "../utils/buttonTypes";

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
                {mainVideoLoaded && <Button action={handleConvert} type={buttonTypes.CONVERT} />}
                {mainVideoLoaded && <Button action={handleCancel} type={buttonTypes.CANCEL} />}
              </div>

              {outputFile && <VideoPlayer src={outputFile} />}

              <div>
                {outputFile && <Button action={handleDownload} type={buttonTypes.DOWNLOAD} />}
                {outputFile && <Button action={handleCancel} type={buttonTypes.NEW_JOB} />}
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
