import React from "react";
import { IMG_ICON } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-28 md:38 lg:w-48 pe-2">
      <img src={IMG_ICON+posterPath} alt="card"  />
    </div>
  );
};

export default MovieCard;
