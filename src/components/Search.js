import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import Header from "./Header";

const Search = () => {
  const moviesList = useSelector((store) => store.movies.nowPlayingMovies);

  const [query, setQuery] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  const handleChange = (e) => {
    console.log("first");
    let query = e.target.value.toLowerCase();
    setQuery(e.target.value);
    let filteredList = [];
    console.log(query);
    if (query) {
      filteredList = moviesList?.filter((movie) =>
        movie.original_title.toLowerCase().includes(query)
      );
      console.log(filteredList);
      setSuggestionList(filteredList);
    } else {
      setSuggestionList([]);
    }
  };

  const handleSelection = (id) => {
    let filteredMovie = moviesList?.filter((movie) => movie.id === id);

    setQuery(filteredMovie[0]?.original_title);
    setSuggestionList([]);
    setSelectedMovie(filteredMovie[0]);
  };

  return (
    <>
      <Header isLogggedIn={true} search={true} />
      <div className="w-full h-screen  bg-black">
        <div className="w-full flex justify-center text-white">
          <div className="w-2/3 md:2/3 lg:1/3 h-20  absolute top-20 flex-col flex align-middle ">
            <input
              type="text"
              placeholder="Search...."
              className="w-[100%] md:w-[75%] lg:w-[100%] p-2 my-4 mb-1 bg-gray-700 border-black"
              value={query}
              onChange={handleChange}
            />
            <div className="h-max-80 z-50">
              {suggestionList?.length > 0 ? (
                <>
                  {suggestionList?.map((item) => {
                    return (
                      <div
                        className="w-[100%] md:w-[75%] lg:w-[100%] px-2 py-1 bg-gray-700 text-white border-black cursor-pointer hover:bg-white hover:text-gray-700"
                        key={item?.id}
                        onClick={() => handleSelection(item?.id)}
                      >
                        <p>{item?.original_title}</p>
                      </div>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="w-full mt-28 absolute top-20 md:top-35 lg:top-40 flex justify-center align-middle px-8 md:px-10 lg:px-12 ">
          {selectedMovie && (
            <>
              <div className="text-white">
                <p className="text-2xl md:text-3xl lg:text-3xl"> {selectedMovie?.original_title}</p>
                <p className="w-min-20 w-3/3 md:w-2/3 lg:w-2/3 text-sm md:text-md lg:text-lg mt-10">
                  {selectedMovie?.overview}
                </p>
                <p className="">Release date : {selectedMovie?.release_date}</p>
                <p>Rating : {selectedMovie?.vote_average?.toFixed(1)}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
