import React from "react";
import ReactPlayer from "react-player";
import VideoBackground from "./VideoBackground";
import Header from "./Header";
const VideoPlayer = () => {
  return (
    <>
      <Header isLogggedIn={true} watch={true}/>
      <div className="w-full h-screen flex justify-center items-center bg-black">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          controls={true}
          className=""
        />
      </div>
    </>
  );
};

export default VideoPlayer;
