import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue, fetchMovies } from "../../features/movieSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { typeValue } = useSelector((store) => store.movies);

  return (
    <form
      action="submit"
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(fetchMovies(typeValue));
      }}
    >
      <input
        type="text"
        placeholder="Insert Movie Title"
        onChange={(e) => {
          dispatch(changeValue(e.target.value));
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
