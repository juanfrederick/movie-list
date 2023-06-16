import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiKey = import.meta.env.VITE_API_KEY;

const initialState = {
  movies: [],
  detail: {},
  isLoading: false,
  typeValue: "",
};

const fetchMovies = createAsyncThunk("movies/fetchMovies", async (value) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${value}&apikey=${apiKey}`
  );
  const data = await response.json();
  return data;
});

const fetchDetail = createAsyncThunk("movies/fetchDetail", async (val) => {
  const response = fetch(`http://www.omdbapi.com/?i=${val}&apikey=${apiKey}`);
  const data = (await response).json();
  return data;
});

const moviseSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.typeValue = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.isLoading = false;
    },
    [fetchMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchDetail.fulfilled]: (state, action) => {
      state.detail = action.payload;
      state.isLoading = false;
    },
    [fetchDetail.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { changeValue } = moviseSlice.actions;
export { fetchMovies, fetchDetail };
export default moviseSlice.reducer;
