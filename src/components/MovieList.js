import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="pt-5 px-6 text-white">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex overflow-x-scroll mt-3" style={{ "overflowX": "auto", "WebkitOverflowScrolling": "touch" }}>
      <style>
      {`
        .overflow-x-scroll::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
