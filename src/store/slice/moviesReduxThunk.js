import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import insrance from "../../ApiConfg/instance.js"

export const movieThunk = createAsyncThunk('movies/getMovies', async (page) => {
    const response = await insrance.get(`movie/popular?page=${page}`);
    console.log(response.data.results); 
    return response.data.results; 
});


const movieSlice = createSlice({
    name: 'movies',
    initialState: { movies: [] },
    extraReducers: (builder) => {
        builder.addCase(movieThunk.fulfilled, (state, action) => {
            state.movies = action.payload;  
        });
    },
});

export default movieSlice.reducer;
