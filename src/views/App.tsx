import React from "react";
import { useFFmpeg } from "../context/FFmpegContext";
import VideoPlayer from "../components/VideoPlayer";
import InputVideo from "../components/InputVideo";
import MainWrapper from "../components/MainWrapper";
import Loading from "../components/Loading";
import Button from "../components/Button";
import buttonTypes from "../utils/buttonTypes";
import ProcessingInfo from "../components/ProcessingInfo";

const App = () => {
  const {
    ready,
    video,
    handleConvert,
    outputFile,
    currentProgress,
    handleCancel,
    handleDownload,
    processing,
  } = useFFmpeg();

  const mainVideoLoaded = !outputFile && currentProgress === 0;

  return (
    <MainWrapper>
      {ready ? (
        <>
          {video && !outputFile && !processing && <VideoPlayer src={URL.createObjectURL(video)} />}
          {processing && <ProcessingInfo />}
          {!video && <InputVideo />}


          {video && !processing && (
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
