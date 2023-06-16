import { useDispatch, useSelector } from "react-redux";
import { changeValue, fetchMovies } from "../../features/movieSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { typeValue, page } = useSelector((store) => store.movies);

  return (
    <form
      action="submit"
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(fetchMovies({ typeValue, page }));
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
