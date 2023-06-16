import React from "react";
import Title from "../component/Element/Title";
import SearchBar from "../component/Element/SearchBar";
import CardParent from "../component/Fragment/CardParent";
import Button from "../component/Element/Button";

const Home = () => {
  return (
    <div className="home-container">
      <Title />
      <SearchBar />
      <CardParent />
      <Button />
    </div>
  );
};

export default Home;
