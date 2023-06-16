import React, { StrictMode } from "react";
import Card from "../Element/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CardParent = () => {
  const { movies, isLoading } = useSelector((store) => store.movies);

  return (
    <div className="card-parent">
      {movies.Search ? (
        isLoading ? (
          <h2>Loading</h2>
        ) : (
          movies.Search.map((val) => {
            return (
              <Link key={val.imdbID} to={`movie/${val.imdbID}`}>
                <Card
                  img={val.Poster}
                  title={val.Title}
                  year={val.Year}
                  type={val.Type}
                />
              </Link>
            );
          })
        )
      ) : (
        <h2>No Movies</h2>
      )}
    </div>
  );
};

export default CardParent;
