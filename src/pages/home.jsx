import React from "react";
import Title from "../component/Element/Title";
import SearchBar from "../component/Element/SearchBar";
import CardParent from "../component/Fragment/CardParent";

const Home = () => {
  return (
    <div className="home-container">
      <Title />
      <SearchBar />
      <CardParent />
    </div>
  );
};

export default Home;
