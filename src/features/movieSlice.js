import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiKey = import.meta.env.VITE_API_KEY;

const initialState = {
  movies: [],
  detail: {},
  isLoading: false,
  typeValue: "",
  totalPage: 0,
  page: 0,
};

const fetchMovies = createAsyncThunk("movies/fetchMovies", async (value) => {
  const { typeValue, page } = value;
  const response = await fetch(
    `http://www.omdbapi.com/?s=${typeValue}&apikey=${apiKey}&page=${page}`
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
      // state.page = 1;
    },
    incrementPage: (state) => {
      state.page = state.page + 1;
    },
    decrementPage: (state) => {
      state.page = state.page - 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
  },
  extraReducers: {
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.isLoading = false;
      state.totalPage = Math.ceil(state.movies.totalResults / 10);
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

export const { changeValue, incrementPage, decrementPage, resetPage } =
  moviseSlice.actions;
export { fetchMovies, fetchDetail };
export default moviseSlice.reducer;
