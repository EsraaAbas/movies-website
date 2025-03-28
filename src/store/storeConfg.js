import { configureStore } from "@reduxjs/toolkit";
import favoriteMovies from "./slice/movieSlice";
import moviesReducer from "./slice/moviesReduxThunk"

const store =configureStore({

    reducer: {
     favoriteMovies : favoriteMovies, 
     movies : moviesReducer ,
    },
});
export default store;
