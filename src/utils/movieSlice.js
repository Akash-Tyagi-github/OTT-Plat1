import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo:null,
    popularMovies:null,
    selectedMovieTrailer:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload
    },
    addselectedMovieTrailer:(state,action)=>{
      state.selectedMovieTrailer=action.payload
    }
  },
});

export const { addNowPlayingMovies ,addTrailerVideo,addPopularMovies, addselectedMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;
