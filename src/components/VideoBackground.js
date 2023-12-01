import React from "react";
import {useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-full h-screen">
      <iframe
        className="w-full h-screen"
        // height="315"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`}
        // src={`https://www.youtube.com/embed/${trailer?.key}`}
        title="YouTube video player"
        // frameborder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
