import { createSlice } from "@reduxjs/toolkit";

const favoriteMovies = createSlice({

name: "favoriteMovies",
initialState: {
    movies: [],
},
reducers:{
    addMovie: (state, action) => {
        state.movies.push(action.payload);
    },
    removeMovie: (state, action) => {
        state.movies = state.movies.filter((movie) => movie.id !== action.payload.id);
    },
}

})
export const { addMovie, removeMovie } = favoriteMovies.actions;
export default favoriteMovies.reducer;