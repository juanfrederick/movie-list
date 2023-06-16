import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDetail } from "../features/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail, isLoading } = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch(fetchDetail(id));
  }, []);

  return (
    <div className="home-container">
      <h1 className="movie-detail">Movie Detail</h1>
      <div className="detail-container">
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <>
            <img src={detail.Poster} alt="asd" />
            <table>
              <tbody>
                <tr>
                  <td className="table-head">Title</td>
                  <td>{detail.Title}</td>
                </tr>
                <tr>
                  <td className="table-head">Year</td>
                  <td>{detail.Year}</td>
                </tr>
                <tr>
                  <td className="table-head">Released</td>
                  <td>{detail.Released}</td>
                </tr>
                <tr>
                  <td className="table-head">Genre</td>
                  <td>{detail.Genre}</td>
                </tr>
                <tr>
                  <td className="table-head">Actors</td>
                  <td>{detail.Actors}</td>
                </tr>
                <tr>
                  <td className="table-head">Plot</td>
                  <td>{detail.Plot}</td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default MoviePage;
