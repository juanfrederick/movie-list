import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementPage,
  decrementPage,
  fetchMovies,
} from "../../features/movieSlice";

const Button = () => {
  const { page, typeValue, totalPage } = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  const nextPage = () => {
    dispatch(incrementPage());
  };
  const prevPage = () => {
    dispatch(decrementPage());
  };

  useEffect(() => {
    dispatch(fetchMovies({ typeValue, page }));
  }, [page]);

  return (
    <div className="button-container">
      {page === 1 ? null : (
        <button
          onClick={() => {
            prevPage();
          }}
        >
          Prev
        </button>
      )}
      {page === totalPage || totalPage === 0 ? null : (
        <button
          onClick={() => {
            nextPage();
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Button;
