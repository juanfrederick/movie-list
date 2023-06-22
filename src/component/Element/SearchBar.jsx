import { useDispatch, useSelector } from "react-redux";
import { changeValue, fetchMovies, resetPage } from "../../features/movieSlice";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { typeValue, page } = useSelector((store) => store.movies);

  useEffect(() => {
    if (page !== 0) {
      dispatch(fetchMovies({ typeValue, page }));
    }
  }, [page]);

  return (
    <form
      action="submit"
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(resetPage());
        if (page === 1) {
          dispatch(fetchMovies({ typeValue, page }));
        }
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
