import React from "react";

const Card = ({ img, title, year, type }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>
          {year} | {type}
        </p>
      </div>
    </div>
  );
};

export default Card;
