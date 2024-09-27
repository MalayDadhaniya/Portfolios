import React from "react";
import style from "./VideoBackground.module.css";
import bgVideo from "../imagesVideos/bg-video.mp4";

const VideoBackground = () => {
  return (
    <div className={style.videoContainer}>
      <video autoPlay muted loop className={style.bgVideo}>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
