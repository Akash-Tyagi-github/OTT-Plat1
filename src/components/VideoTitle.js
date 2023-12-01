import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full h-screen aspect-video pt-[12%] absolute px-12 text-white  bg-gradient-to-r from-black overflow-x-hidden">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black font-semibold p-3 px-12 text-xl  rounded-md me-2 hover:bg-opacity-70">Play</button>
        <button className="bg-gray-600 text-white p-3 px-12 text-xl  bg-opacity-50 rounded-md hover:bg-opacity-100">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
