import React from "react";
import { useSelector } from "react-redux";

const Button = () => {
  const { page, totalPage } = useSelector((store) => store.movies);
  return (
    <div>
      {page === 1 ? null : <button>prev</button>}
      {page === totalPage || totalPage === 0 ? null : <button>next</button>}
    </div>
  );
};

export default Button;
